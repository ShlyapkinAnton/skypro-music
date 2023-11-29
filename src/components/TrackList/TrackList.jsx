import { useState } from 'react'
import * as S from './TrackListStyled'
import { SearchBlock } from '../SearchBlock/SearchBlock'
import { TrackItem } from '../Tracks/TrackItems'
// import { Filter } from '../Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack, setCurrentPlaylist } from '../../store/slices/trackSlice.js'
import { allTracksSelector, shuffleAllTracksSelector, shuffleSelector, currentPageSelector, currentPlaylistSelector, allFavoritesTracksSelector, allCategorySelector } from '../../store/selectors/index.js'

export const Lists = ({text, tracks, errorFetch, isLoading }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageSelector)
  const currentPlaylist = useSelector(currentPlaylistSelector)
  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const allTracks = useSelector(allTracksSelector)
  const favouritesTracks = useSelector(allFavoritesTracksSelector)
  const categoryTracks = useSelector(allCategorySelector);
  const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist

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

  if (shuffle) {
    dispatch(setShuffleTrack({ shuffle }));
  }

  const handleActiveTrack = (track) => {  

    if (currentPage === "Main") {
      dispatch(setCurrentPlaylist(allTracks));
    }
    if (currentPage === "Favorites") {
      dispatch(setCurrentPlaylist(favouritesTracks));
    }
    if (currentPage === "Category") {
      dispatch(setCurrentPlaylist(categoryTracks));
    }

    const indexActiveTrack = arrayTracksAll.indexOf(track)
    dispatch(setActiveTrack({ track, indexActiveTrack }))
  };

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

        <S.ContentPlaylist>
          <S.ContentPlaylistError>
            {errorFetch !== null ? `Ошибка: ${errorFetch}` : null}
          </S.ContentPlaylistError>
          {isLoading && new Array(20) .fill() .map(() => ( <TrackItem key={Math.random()} isLoading={isLoading} /> ))}
          {tracks && tracks.map((track) => ( <TrackItem key={track.id} handleActiveTrack={handleActiveTrack} isLoading={isLoading} track={track} tracks={tracks} />))}
        </S.ContentPlaylist>

      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
