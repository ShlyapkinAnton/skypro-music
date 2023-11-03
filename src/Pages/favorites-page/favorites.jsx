import * as S from '../../AppStyled.js'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react'
import { getCatalog } from '../../Api.js'

export const FavoritesPage = ({ setUser, activeTrack, setActiveTrack }) => {
  const [tracks, setTracks] = useState([]);
  const [errorFetch, setErrorFetch] = useState(null);
  useEffect(() => {
    getCatalog().then((tracks) => {
      setTracks(tracks);
      console.log("Список треков",tracks);
    })
    .catch ((error) => {
      console.log(error.message);
      setErrorFetch("Не удалось загрузить плейлист, попробуйте позже");
    })
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Bar setUser={setUser}/>
          <Lists text="Мои треки" tracks={tracks} errorFetch={errorFetch} activeTrack={activeTrack} setActiveTrack={setActiveTrack}/>
          <SBar />
        </S.Main>

        {activeTrack ? <Player tracks={tracks} activeTrack={activeTrack} setActiveTrack={setActiveTrack}/> : null}

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}
