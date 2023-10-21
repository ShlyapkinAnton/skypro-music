import * as S from './TracksStyled'
import { useState, useEffect } from 'react'
import { GetTracks, getOneTrack } from '../../Api.js'
let errorText = null;

export const Tracks = ({playerVisible, setPlayerVisible }) => {
  const [contentVisible, setContentVisible] = useState(true)
  setTimeout(() => {
    setContentVisible(true)
  }, 4000);

  const [tracks, setTracks] = useState([]);
  useEffect(() => {

    GetTracks().then((tracks) => {
      errorText = null;
      setTracks(tracks);
    })
    .catch (() => {
      errorText = "Не удалось загрузить плейлист, попробуйте позже";
    })

  }, []);

  const [activeTrack, setActiveTrack] = useState(false)

    const handleChooseTrackClick = (id) => {
      getOneTrack({id}).then((track) => {
        setActiveTrack(track);
        // console.log(track);
        setPlayerVisible(track);
      })
    }
 
  const ListItemVisible = tracks.map((track) => {
    let m = Math.trunc(track.duration_in_seconds/60);
    let s = (track.duration_in_seconds % 60).toString().padStart(2, '0');

    return (
      <S.PlaylistItem key={track.id}> 
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText key={track.id} onClick={() => handleChooseTrackClick(track.id)}>
              <S.TrackTitleLink>
                {track.name} <S.TrackTitleSpan>{track.textspan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{m}:{s}</S.TrackTimeText>
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
      <S.ContentPlaylistError>{errorText !== null ? `Ошибка: ${errorText}` : null}</S.ContentPlaylistError>
      {contentVisible ? ListItemVisible : ListItem}
    </S.ContentPlaylist>
  )
}
