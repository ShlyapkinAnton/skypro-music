
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allTracksSelector } from '../../store/selectors/index.js'
import { setAllTracks, setCurrentPage } from '../../store/slices/trackSlice.js'
import { useGetTracksAllQuery } from '../../serviseQuery/tracks'

export const MainPage = () => {
  const dispatch = useDispatch() // изменить
  const tracks = useSelector(allTracksSelector) // получить
  const [errorFetch, setErrorFetch] = useState(null)

  const { data, isError, isLoading } = useGetTracksAllQuery()
  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(setAllTracks(data))
      dispatch(setCurrentPage("Main"))
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
