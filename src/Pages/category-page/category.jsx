import { useParams } from 'react-router-dom'
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allCategorySelector,
  filtersPlaylistSelector,
} from '../../store/selectors/index.js'
import {
  setAllCategory,
  setCurrentPage,
} from '../../store/slices/trackSlice.js'
import { useGetSelectionsQuery } from '../../serviceQuery/tracks'

export const CategoryPage = () => {
  const dispatch = useDispatch()
  const [errorFetch, setErrorFetch] = useState(null)
  const categoryAll = useSelector(allCategorySelector)
  const filter = useSelector(filtersPlaylistSelector)
  const tracks =
    filter?.isActiveSort || filter?.isActiveAuthors || filter?.isActiveSearch
      ? filter?.filterTracksArr
      : categoryAll
  const params = useParams()
  const { data, isError, isLoading } = useGetSelectionsQuery(Number(params.id))

  useEffect(() => {
    dispatch(setAllCategory(data?.items))
  }, [filter.isActiveSort, tracks])

  useEffect(() => {
    if (data) {
      dispatch(setAllCategory(data?.items))
      dispatch(setCurrentPage('Category'))
      setErrorFetch(null)
    }
    if (isError) {
      setErrorFetch('Не удалось загрузить плейлист, попробуйте позже')
    }
  }, [data, isError])

  return (
    <Lists
      text={data?.name}
      errorFetch={errorFetch}
      tracks={tracks}
      isError={isError}
      isLoading={isLoading}
    />
  )
}
