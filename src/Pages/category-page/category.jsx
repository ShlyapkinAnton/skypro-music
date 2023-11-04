import * as S from '../../AppStyled.js'
import { useParams } from 'react-router-dom'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react'
import { getCatalog } from '../../Api.js'

const arr = [
  { id: 1, listName: `Плейлист дня` },
  { id: 2, listName: `100 танцевальных хитов` },
  { id: 3, listName: `Инди-заряд` },
]

export const CategotyPage = ({
  user,
  setUser,
  activeTrack,
  setActiveTrack,
}) => {
  const param = useParams()
  let list = arr.find((el) => el.id === Number(param.id))

  const [tracks, setTracks] = useState([])
  const [errorFetch, setErrorFetch] = useState(null)
  useEffect(() => {
    getCatalog({ id: list.id })
      .then((tracks) => {
        setTracks(tracks.items)
        console.log('Список треков', tracks.items)
      })
      .catch((error) => {
        console.log(error.message)
        setErrorFetch('Не удалось загрузить плейлист, попробуйте позже')
      })
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Bar user={user} setUser={setUser} />
          <Lists
            list={list}
            text={list.listName}
            tracks={tracks}
            errorFetch={errorFetch}
            activeTrack={activeTrack}
            setActiveTrack={setActiveTrack}
          />
          <SBar />
        </S.Main>

        {activeTrack ? (
          <Player
            tracks={tracks}
            activeTrack={activeTrack}
            setActiveTrack={setActiveTrack}
          />
        ) : null}

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}
