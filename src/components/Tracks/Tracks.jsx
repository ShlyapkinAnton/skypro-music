import * as S from './TracksStyled'
import { useState } from 'react'
import { getOneTrack } from '../../Api.js'
import { formatTime } from '../time.js'

export const Tracks = ({ tracks, errorFetch, activeTrack, setActiveTrack }) => {
  const [contentVisible, setContentVisible] = useState(false)
  setTimeout(() => {
    setContentVisible(true)
  }, 4000)

  const handleChooseTrackClick = (id) => {
    getOneTrack({ id }).then((track) => {
      setActiveTrack(track)
      console.log('Играет', track)
    })
  }

  const ListItemVisible = tracks.map((track) => {
    return (
      <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText
              key={track.id}
              onClick={() => handleChooseTrackClick(track.id)}
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
