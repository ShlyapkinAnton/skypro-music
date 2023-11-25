import * as S from './TracksStyled'
import { useState } from 'react'
import { formatTime } from '../time.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  ActiveTrackSelector,
  isPlayingSelector,
  indexActiveTrackSelector,
} from '../../store/selectors/index.js'

export const Tracks = ({ tracks, errorFetch, handleActiveTrack }) => {
  const [contentVisible, setContentVisible] = useState(false)
  setTimeout(() => {
    setContentVisible(true)
  }, 4000)
  const activeTrack = useSelector(ActiveTrackSelector)
  const isPlaying = useSelector(isPlayingSelector)

  // const dispatch = useDispatch();
  // const handleChooseTrackClick = (track) =>{
  //   console.log("track",track);

  //   const indexCurrentTrack = tracks.indexOf(track);
  //   dispatch(setActiveTrack({track, indexCurrentTrack}));
  //   console.log(indexCurrentTrack)
  // }

  const ListItemVisible = tracks.map((track) => {
    return (
      <S.PlaylistItem key={track.id} onClick={() => handleActiveTrack(track)}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
                {activeTrack && activeTrack.id === track.id ? (
                  <S.PointPlaying $playing={isPlaying} />
                ) : (
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
                )}
            </S.TrackTitleImage>
            <S.TrackTitleText
              key={track.id}
              // onClick={() => handleChooseTrackClick(track.id)}
            >
              <S.TrackTitleLink>
                {track.name}{' '}
                <S.TrackTitleSpan>{track.textspan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              <span>{track.author}</span>
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">
              <span>{track.album}</span>
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {formatTime(track.duration_in_seconds)}
            </S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
  })

  const ListItem = tracks.map((track) => {
    return (
      <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.HiddenImage></S.HiddenImage>
            <S.HiddenText></S.HiddenText>
          </S.TrackTitle>
          <S.HiddenAuthor></S.HiddenAuthor>
          <S.HiddenAlbum></S.HiddenAlbum>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
  })

  return (
    <S.ContentPlaylist>
      <S.ContentPlaylistError>
        {errorFetch !== null ? `Ошибка: ${errorFetch}` : null}
      </S.ContentPlaylistError>
      {contentVisible ? ListItemVisible : ListItem}
    </S.ContentPlaylist>
  )
}
