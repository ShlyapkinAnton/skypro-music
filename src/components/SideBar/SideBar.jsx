import * as S from './SideBarStyles'

export const SBar = ({props}) => {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.SidebarIconSvg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </S.SidebarIconSvg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      {props}
    </S.MainSidebar>
  )
}
