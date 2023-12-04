import { Lists } from '../../components/TrackList/TrackList'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allTracksSelector,
  filtersPlaylistSelector,
} from '../../store/selectors/index'
import { setAllTracks, setCurrentPage } from '../../store/slices/trackSlice'
import { useGetTracksAllQuery } from '../../serviceQuery/tracks'

export const MainPage = () => {
  const dispatch = useDispatch() // изменить
  const [errorFetch, setErrorFetch] = useState(null)
  const tracksAll = useSelector(allTracksSelector) // получить
  const filter = useSelector(filtersPlaylistSelector)
  const { data, isError, isLoading } = useGetTracksAllQuery()
  const tracks =
    filter?.isActiveSort ||
    filter?.isActiveAuthors ||
    filter?.isActiveGenres ||
    filter?.isActiveSearch
      ? filter?.filterTracksArr
      : tracksAll

  useEffect(() => {
    dispatch(setAllTracks(data))
  }, [filter.isActiveSort, tracks])

  useEffect(() => {
    if (data) {
      dispatch(setAllTracks(data))
      dispatch(setCurrentPage('Main'))
      setErrorFetch(null)
    }
    if (isError) {
      setErrorFetch('Не удалось загрузить плейлист, попробуйте позже')
    }
  }, [data, isError])

  return (
    <Lists
      text="Треки"
      errorFetch={errorFetch}
      tracks={tracks}
      isError={isError}
      isLoading={isLoading}
    />
  )
}
