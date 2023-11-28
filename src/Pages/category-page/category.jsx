import { useParams } from 'react-router-dom'
import { Lists } from '../../components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategorySelector } from '../../store/selectors/index.js'
import { setAllCategory, setCurrentPage } from '../../store/slices/trackSlice.js'
import { useGetSelectionsQuery } from '../../serviseQuery/tracks'

export const CategotyPage = () => {
  const dispatch = useDispatch() 
  const tracks = useSelector(allCategorySelector) 
  const [errorFetch, setErrorFetch] = useState(null)

  const params = useParams();
  const { data, isError, isLoading } = useGetSelectionsQuery(Number(params.id))
  useEffect(() => {
    if (data) {
      dispatch(setAllCategory(data?.items))
      dispatch(setCurrentPage("Category"))
      setErrorFetch(null)
    }
    if (isError) {
      setErrorFetch('Не удалось загрузить плейлист, попробуйте позже')
    }
  }, [data, isError]);
  
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
