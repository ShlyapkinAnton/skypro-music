import * as S from '../../AppStyled.js'
import { useParams } from 'react-router-dom'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'

const arr = [
  { id: 1, listName: `Плейлист дня` },
  { id: 2, listName: `100 танцевальных хитов` },
  { id: 3, listName: `Инди-заряд` },
]

export const CategotyPage = () => {
  const param = useParams()
  let list = arr.find((el) => el.id === Number(param.id))

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Bar />
          <Lists text={list.listName} />
          <SBar />
        </S.Main>

        <Player />

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}