import * as S from '../../AppStyled.js'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { PlayList } from '../../components/PlayLists/PlayLists.jsx'

export const MainPage = ({ user, setUser }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Bar user={user} setUser={setUser} />
          <Lists text="Треки" />
          <SBar props={PlayList()} />
        </S.Main>

        <Player />

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}
