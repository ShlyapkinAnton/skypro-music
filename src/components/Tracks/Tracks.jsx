import * as S from './TracksStyled'
import { useState } from 'react'

export default function Tracks() {
  const [contentVisible, setContentVisible] = useState(false)
  setTimeout(() => {
    setContentVisible(true)
  }, 4000)

  const Lists = [
    {
      id: 1,
      text: 'Guilt',
      textspan: '',
      author: 'Nero',
      album: 'Welcome Reality',
      time: '4:44',
    },
    {
      id: 2,
      text: 'Elektro',
      textspan: '',
      author: 'Dynoro, Outwork, Mr. Gee',
      album: 'Elektro',
      time: '2:22',
    },
    {
      id: 3,
      text: 'I’m Fire',
      textspan: '',
      author: 'Ali Bakgor',
      album: 'I’m Fire',
      time: '2:22',
    },
    {
      id: 4,
      text: 'Non Stop',
      textspan: '(Remix)',
      author: 'Стоункат, Psychopath',
      album: 'Non Stop',
      time: '4:12',
    },
    {
      id: 5,
      text: 'Run Run',
      textspan: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      album: 'Run Run',
      time: '2:54',
    },
    {
      id: 6,
      text: 'Eyes on Fire',
      textspan: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      album: 'Eyes on Fire',
      time: '5:20',
    },
    {
      id: 7,
      text: 'Mucho Bien',
      textspan: '(Hi Profile Remix)',
      author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      album: 'Mucho Bien',
      time: '3:41',
    },
    {
      id: 8,
      text: 'Knives n Cherries',
      textspan: '',
      author: 'minthaze',
      album: 'Captivating',
      time: '1:48',
    },
  ]

  const ListItemVisible = Lists.map((list) => {
    return (
      <S.PlaylistItem key={list.id}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                {list.text} <S.TrackTitleSpan>{list.textspan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{list.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{list.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{list.time}</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
  })

  const ListItem = Lists.map((list) => {
    return (
      <S.PlaylistItem key={list.id}>
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
      {contentVisible ? ListItemVisible : ListItem}
    </S.ContentPlaylist>
  )
}
