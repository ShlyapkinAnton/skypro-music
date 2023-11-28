import { Lists } from '../../components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allFavoritesTracksSelector } from '../../store/selectors/index.js'
import { setAllFavoritesTracks, setCurrentPage } from '../../store/slices/trackSlice.js'
import { useGetFavouriteTracksAllQuery } from '../../serviseQuery/tracks'

export const FavoritesPage = () => {
  const dispatch = useDispatch() // изменить
  const tracks = useSelector(allFavoritesTracksSelector) // получить
  const [errorFetch, setErrorFetch] = useState(null)

  const { data, isError, isLoading } = useGetFavouriteTracksAllQuery()
  useEffect(() => {
    if (data) {
      dispatch(setAllFavoritesTracks(data))
      dispatch(setCurrentPage("Favorites"))
      setErrorFetch(null)
    } else {
      setErrorFetch('В этом плейлисте нет треков')
    }
    if (isError ) {
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
