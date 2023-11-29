import * as S from './TracksStyled'
import { useState, useEffect } from 'react'
import { formatTime } from '../time.js'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveTrackSelector, isPlayingSelector, indexActiveTrackSelector} from '../../store/selectors/index.js'
import { getLike, getDislike } from '../../Api.js'

export const TrackItem = ({ tracks, errorFetch, handleActiveTrack }) => { // isFavorites = false 
  const [contentVisible, setContentVisible] = useState(false)
  setTimeout(() => {
    setContentVisible(true)
  }, 4000)
  const activeTrack = useSelector(ActiveTrackSelector)
  const isPlaying = useSelector(isPlayingSelector)
  const auth = localStorage.getItem('userId')
  // console.log(auth,)
  // const isUserLike = tracks.map((track) => { !!(track.stared_user ?? []).find(({ id }) => id === auth,) })
  // const [isLiked, setIsLiked] = useState(tracks.map((track) => { (tracks.stared_user ?? []).find((user) => user.id === auth) }))

  // const [isLiked, setIsLiked] = useState(tracks.map((track) => {(track.stared_user ?? []).find( (item) => item.id === auth  )}))

  // console.log(isLiked)
  // useEffect(() => {
  //   if (isFavorites) {
  //     setIsLiked(isFavorites);
  //   } else {  
  //     setIsLiked(isUserLike);
  //   }
  // }, [isUserLike, isFavorites]);

  // const handleLike = async (id) => {
  //   setIsLiked(true);
  //   await getLike({id});
  // };

  // const handleDislike = async (id) => {
  //   setIsLiked(false);
  //   await getDislike({id});
  // };

  // const toggleLikeDislike = (id) => {
  //   console.log(isLiked);
  //   isLiked ? handleDislike(id) : handleLike(id);
  // }

  // const toggleLikeDislike = (id) => {
  //   if (isLiked) {
  //     getDislike({id});
  //   }
  //   else {
  //     getLike({id});
  //   }
  // }

  const ListItemVisible = tracks.map((track) => { 
    // !!(track.stared_user ?? []).find(({ id }) => id === auth)
    // const [isLiked, setIsLiked] = useState(false)
    return (
      <S.PlaylistItem key={track.id} >
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
              key={track.id} onClick={() => handleActiveTrack(track)}
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
            {/* <S.TrackTimeSvg alt="like" onClick={() => toggleLikeDislike(track?.id)} $active={isUserLike} >
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg> */}

            <S.TrackTimeSvg alt="like" 
            // onClick={() => toggleLikeDislike(track?.id)}
            >
              {/* {isLiked ? (<use xlinkHref="/img/icon/sprite.svg#icon-like" />) : (<use xlinkHref="/img/icon/sprite.svg#icon-dislike" />)} */}
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
