import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from '../AppStyled'
import { ActiveTrackSelector } from '../store/selectors/index'
import { Bar } from '../components/NavBar/NavBar'
import { SBar } from '../components/SideBar/SideBar'
import { PlayList } from '../components/PlayLists/PlayLists'
import { Player } from '../components/AudioPlayers/AudioPlayers'

export const Layout = () => {
  const currentTrack = useSelector(ActiveTrackSelector)
  const loading = Boolean(currentTrack?.id)

  return (
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Bar />
            <Outlet />
            <SBar props={PlayList()} />
          </S.Main>
          {loading ? <Player currentTrack={currentTrack} /> : null}
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </div>
  )
}
