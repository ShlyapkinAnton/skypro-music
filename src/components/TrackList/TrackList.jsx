import * as S from './TrackListStyled'
import { SearchBlock } from '../SearchBlock/SearchBlock'
import { TrackItem } from '../Tracks/TrackItems'
import { Filters } from '../Filters/Filters'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveTrack,
  setCurrentPlaylist,
  toggleShuffleTracks,
  setFilterPlaylist,
} from '../../store/slices/trackSlice'
import {
  allTracksSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
  currentPageSelector,
  currentPlaylistSelector,
  allFavoritesTracksSelector,
  allCategorySelector,
  filtersPlaylistSelector,
} from '../../store/selectors/index'

export const Lists = ({ text, tracks, errorFetch, isLoading }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageSelector)
  const currentPlaylist = useSelector(currentPlaylistSelector)
  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const allTracks = useSelector(allTracksSelector)
  const favoriteTracks = useSelector(allFavoritesTracksSelector)
  const categoryTracks = useSelector(allCategorySelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist
  const filtersPlaylist = useSelector(filtersPlaylistSelector)

  useEffect(() => {
    dispatch(setFilterPlaylist({ authors: '' }))
    dispatch(setFilterPlaylist({ isActiveAuthors: false }))
    dispatch(setFilterPlaylist({ genres: '' }))
    dispatch(setFilterPlaylist({ isActiveGenres: false }))
    dispatch(setFilterPlaylist({ sort: 'По умолчанию' }))
    dispatch(setFilterPlaylist({ isActiveSort: false }))
    dispatch(setFilterPlaylist({ search: '' }))
    dispatch(setFilterPlaylist({ isActiveSearch: false }))
    dispatch(setFilterPlaylist({ filterTracksArr: '' }))
    // console.log(text, filtersPlaylist.filterTracksArr)
  }, [text])

  const handleActiveTrack = (track) => {
    if (!filtersPlaylist.isActiveSort && !filtersPlaylist?.isActiveAuthors) {
      if (currentPage === 'Main') {
        dispatch(setCurrentPlaylist(allTracks))
      }
      if (currentPage === 'Favorites') {
        dispatch(setCurrentPlaylist(favoriteTracks))
      }
      if (currentPage === 'Category') {
        dispatch(setCurrentPlaylist(categoryTracks))
      }
    } else {
      dispatch(setCurrentPlaylist(filtersPlaylist.filterTracksArr))
    }

    if (shuffle) {
      dispatch(toggleShuffleTracks({ shuffle }))
    }
    const indexActiveTrack = arrayTracksAll.indexOf(track)
    dispatch(setActiveTrack({ track, indexActiveTrack }))
  }

  return (
    <S.MainCenterBlock>
      <SearchBlock />

      <S.CenterBlockH2>{text}</S.CenterBlockH2>

      <Filters
        selectedArrListFilter={
          currentPage === 'Main'
            ? allTracks
            : currentPage === 'Favorites'
            ? favoriteTracks
            : categoryTracks
        }
        currentPage={currentPage}
      />

      <S.CenterBlockContent>
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
          {isLoading &&
            new Array(20)
              .fill()
              .map(() => (
                <TrackItem key={Math.random()} isLoading={isLoading} />
              ))}
          {tracks &&
            tracks.map((track) => (
              <TrackItem
                key={track.id}
                handleActiveTrack={handleActiveTrack}
                isLoading={isLoading}
                track={track}
                tracks={tracks}
              />
            ))}
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
