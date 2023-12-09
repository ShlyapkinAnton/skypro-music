import * as S from './SearchBlockStyled'
import { useDispatch } from 'react-redux'
import { setFilterPlaylist } from '../../store/slices/trackSlice'

export const SearchBlock = () => {
  const dispatch = useDispatch()
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          dispatch(
            setFilterPlaylist({
              search: e.target.value,
            })
          )
        }}
      />
    </S.CenterBlockSearch>
  )
}
