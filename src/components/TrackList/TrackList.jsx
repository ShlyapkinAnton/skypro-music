import { useState } from 'react'
import * as S from './TrackListStyled'
import {SearchBlock} from '../SearchBlock/SearchBlock'
import {Tracks} from '../Tracks/Tracks'

export const Lists = ({text, tracks, errorFetch, activeTrack, setActiveTrack, handleActiveTrack }) => {
  const [filterPerformerVisible, setVisible] = useState(false)
  const filterPerformerClick = () => {
    setVisible(!filterPerformerVisible)
    setYearVisible(false)
    setStyleVisible(false)
  }

  const [filterYearVisible, setYearVisible] = useState(false)
  const filterYearClick = () => {
    setYearVisible(!filterYearVisible)
    setStyleVisible(false)
    setVisible(false)
  }

  const [filterStyleVisible, setStyleVisible] = useState(false)
  const filterStyleClick = () => {
    setStyleVisible(!filterStyleVisible)
    setVisible(false)
    setYearVisible(false)
  }

  return (
    <S.MainCenterblock>

      <SearchBlock />

      <S.CenterblockH2>{text}</S.CenterblockH2>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>

        <S.FilterItem>
          <S.FilterButton onClick={filterPerformerClick}>
            исполнителю
          </S.FilterButton>
          {filterPerformerVisible && (
            <S.ButtonList>
              <S.ButtonItemLink>Nero</S.ButtonItemLink>
              <S.ButtonItemLink>Dynoro</S.ButtonItemLink>
              <S.ButtonItemLink>Outwork</S.ButtonItemLink>
              <S.ButtonItemLink>Mr. Gee</S.ButtonItemLink>
              <S.ButtonItemLink>Ali Bakgor</S.ButtonItemLink>
              <S.ButtonItemLink>Psychopath</S.ButtonItemLink>
              <S.ButtonItemLink>Jaded</S.ButtonItemLink>
              <S.ButtonItemLink>Will Clarke</S.ButtonItemLink>
              <S.ButtonItemLink>AR/CO</S.ButtonItemLink>
              <S.ButtonItemLink>Blue Foundation</S.ButtonItemLink>
              <S.ButtonItemLink>Zeds Dead</S.ButtonItemLink>
            </S.ButtonList>
          )}
        </S.FilterItem>

        <S.FilterItem>
          <S.FilterButton
            onClick={filterYearClick}
            className="_btn-text"
            type="button"
          >
            году выпуска
          </S.FilterButton>
          {filterYearVisible && (
            <S.ButtonList>
              <S.ButtonItem>По умолчанию</S.ButtonItem>
              <S.ButtonItem>Сначала новые</S.ButtonItem>
              <S.ButtonItem>Сначала старые</S.ButtonItem>
            </S.ButtonList>
          )}
        </S.FilterItem>

        <S.FilterItem>
          <S.FilterButton
            onClick={filterStyleClick}
            className="_btn-text"
            type="button"
          >
            жанру
          </S.FilterButton>
          {filterStyleVisible && (
            <S.ButtonList>
              <S.ButtonItem>Рок</S.ButtonItem>
              <S.ButtonItem>Хип-хоп</S.ButtonItem>
              <S.ButtonItem>Поп-музыка</S.ButtonItem>
              <S.ButtonItem>Техно</S.ButtonItem>
              <S.ButtonItem>Инди</S.ButtonItem>
            </S.ButtonList>
          )}
        </S.FilterItem>
      </S.CenterblockFilter>
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
          <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
          <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
          <S.PlaylistTitleCol04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleCol04>
        </S.ContentTitle>

        <Tracks tracks={tracks} errorFetch={errorFetch} activeTrack={activeTrack} setActiveTrack={setActiveTrack} handleActiveTrack={handleActiveTrack}/>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
