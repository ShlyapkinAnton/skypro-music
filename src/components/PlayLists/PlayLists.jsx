import * as S from './PlayListsStyled'
import { useState } from 'react'

export default function playlist() {
  const [contentVisible, setContentVisible] = useState(false)
  setTimeout(() => {
    setContentVisible(true)
  }, 4000)

  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <S.SidebarLink href="/#">
            {' '}
            {contentVisible ? (
              <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
            ) : (
              <S.Hidden></S.Hidden>
            )}
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="/#">
            {' '}
            {contentVisible ? (
              <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
            ) : (
              <S.Hidden></S.Hidden>
            )}
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="/#">
            {' '}
            {contentVisible ? (
              <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
            ) : (
              <S.Hidden></S.Hidden>
            )}
          </S.SidebarLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  )
}
