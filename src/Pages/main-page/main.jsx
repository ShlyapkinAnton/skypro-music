import * as S from '../../AppStyled.js'
import { Player } from '../../components/AudioPlayers/AudioPlayers.jsx'
import { Bar } from '../../components/NavBar/NavBar.jsx'
import { SBar } from '../../components/SideBar/SideBar.jsx'
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { PlayList } from '../../components/PlayLists/PlayLists.jsx'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GetTracks } from '../../Api.js'
import { allTracksSelector, ActiveTrackSelector, shuffleAllTracksSelector, shuffleSelector } from "../../store/selectors/index.js"
import { setAllTracks, setActiveTrack } from "../../store/slices/track.js";


export const MainPage = ({ user, setUser }) => {
  const dispatch = useDispatch() // изменить
  const [isLoad, setLoad] = useState(false)
  const tracks = useSelector(allTracksSelector) // получить
  const activeTrack = useSelector (ActiveTrackSelector) || {};
  const [errorFetch, setErrorFetch] = useState(null)
  const shuffle = useSelector ( shuffleSelector)
  const shuffleAllTracks = useSelector (shuffleAllTracksSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  const handleActiveTrack = (track) =>{
    const indexActiveTrack = arrayTracksAll.indexOf(track);
    dispatch(setActiveTrack({track, indexActiveTrack}));
    setLoad(true);
  }

  useEffect(() => {
    GetTracks()
      .then((tracks) => {
        dispatch(setAllTracks(tracks)) 
        console.log('Список треков', tracks)
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
            text="Треки"
            tracks={tracks}
            errorFetch={errorFetch}
            activeTrack={activeTrack}
            handleActiveTrack={handleActiveTrack}
          />
          <SBar props={PlayList()} />
        </S.Main>

        {isLoad && <Player/> }

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}
