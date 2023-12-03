import React from 'react'
import * as S from './TracksFilterCategoryStyle'

export function TracksFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
  numberSelectedValues,
}) {
  const InstallCategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? '' : nameCategory)

  return (
    <S.FilterCategoryName>
      <S.FilterButton
        type="button"
        onClick={InstallCategoryFilter}
        className={isActiveCategory === nameCategory}
      >
        {nameCategory}
      </S.FilterButton>

      {numberSelectedValues > 0 && (
        <S.selectedFilterCount>{numberSelectedValues}</S.selectedFilterCount>
      )}

      {isActiveCategory === nameCategory && (
        <S.FilterCategoryMenu>
          <S.FilterList>{content}</S.FilterList>
        </S.FilterCategoryMenu>
      )}
    </S.FilterCategoryName>
  )
}
