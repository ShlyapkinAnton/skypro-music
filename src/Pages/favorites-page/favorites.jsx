import * as S from '../../AppStyled.js'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'

export const FavoritesPage = ({ user, setUser, playerVisible, setPlayerVisible }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Bar user={user} setUser={setUser}/>
          <Lists text="Мои треки" playerVisible={playerVisible} setPlayerVisible={setPlayerVisible} />
          <SBar />
        </S.Main>

        {playerVisible ? <Player playerVisible={playerVisible} setPlayerVisible={setPlayerVisible}/> : null}

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}
