import * as S from '../../AppStyled.js'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'

export const FavoritesPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Bar />
          <Lists text="Мои треки" />
          <SBar />
        </S.Main>

        <Player />

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}
