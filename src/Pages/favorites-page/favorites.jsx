import { Lists } from '../../components/TrackList/TrackList'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allFavoritesTracksSelector,
  filtersPlaylistSelector,
} from '../../store/selectors/index'
import {
  setAllFavoritesTracks,
  setCurrentPage,
} from '../../store/slices/trackSlice'
import { useGetFavoriteTracksAllQuery } from '../../serviceQuery/tracks'

export const FavoritesPage = () => {
  const dispatch = useDispatch()
  const [errorFetch, setErrorFetch] = useState(null)
  const favoriteTracks = useSelector(allFavoritesTracksSelector)
  const filter = useSelector(filtersPlaylistSelector)
  const tracks =
    filter?.isActiveSort ||
    filter?.isActiveAuthors ||
    filter?.isActiveGenres ||
    filter?.isActiveSearch
      ? filter?.filterTracksArr
      : favoriteTracks
  const { data, isError, isLoading } = useGetFavoriteTracksAllQuery()

  useEffect(() => {
    dispatch(setAllFavoritesTracks(data))
  }, [filter.isActiveSort, tracks, filter])

  useEffect(() => {
    if (data) {
      dispatch(setAllFavoritesTracks(data))
      dispatch(setCurrentPage('Favorites'))
      setErrorFetch(null)
    } else {
      setErrorFetch('В этом плейлисте нет треков')
    }
    if (isError) {
      setErrorFetch('Не удалось загрузить плейлист, попробуйте позже')
    }
  }, [data, isError])

  return (
    <Lists
      text="Мои треки"
      errorFetch={errorFetch}
      tracks={tracks}
      isError={isError}
      isLoading={isLoading}
    />
  )
}
