import * as S from './TracksStyled'
import { useState, useEffect } from 'react'
import { formatTime } from '../time'
import { useSelector } from 'react-redux'
import {
  ActiveTrackSelector,
  isPlayingSelector,
} from '../../store/selectors/index'
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from '../../serviceQuery/tracks'

export const TrackItem = ({ track, isLoading, handleActiveTrack }) => {
  const activeTrack = useSelector(ActiveTrackSelector)
  const isPlaying = useSelector(isPlayingSelector)
  const [setLike] = useSetLikeMutation()
  const [setDislike] = useSetDislikeMutation()
  const auth = JSON.parse(localStorage.getItem('user'))
  const isUserLike = Boolean(
    track?.stared_user?.find((user) => user.id === auth.id)
  )
  const [isLiked, setIsLiked] = useState(isUserLike)

  useEffect(() => {
    if (track?.stared_user) {
      setIsLiked(isUserLike)
    } else {
      setIsLiked(true)
    }
  }, [isUserLike, track?.stared_user])

  const handleLike = async (id) => {
    setIsLiked(true)
    await setLike({ id }).unwrap()
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    await setDislike({ id }).unwrap()
  }

  const toggleLikeDislike = (id) => {
    isLiked ? handleDislike(id) : handleLike(id)
  }

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          {!isLoading ? (
            <S.TrackTitleImage>
              {activeTrack && activeTrack.id === track?.id ? (
                <S.PointPlaying $playing={isPlaying} />
              ) : (
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              )}
            </S.TrackTitleImage>
          ) : (
            <S.HiddenImage></S.HiddenImage>
          )}

          {!isLoading ? (
            <S.TrackTitleText
              key={track.id}
              onClick={() => handleActiveTrack(track)}
            >
              <S.TrackTitleLink>
                {track?.name}
                <S.TrackTitleSpan>{track?.textspan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.HiddenText></S.HiddenText>
          )}
        </S.TrackTitle>

        {!isLoading ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              <span>{track?.author}</span>
            </S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.HiddenAuthor></S.HiddenAuthor>
        )}

        {!isLoading ? (
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">
              <span>{track?.album}</span>
            </S.TrackAlbumLink>
          </S.TrackAlbum>
        ) : (
          <S.HiddenAlbum></S.HiddenAlbum>
        )}

        <S.TrackTime>
          <S.TrackTimeSvg
            alt="like"
            onClick={(event) => {
              toggleLikeDislike(track?.id)
              event.stopPropagation()
            }}
            $active={isLiked}
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formatTime(track?.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
