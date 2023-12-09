import * as S from './SideBarStyles'
import { Link } from 'react-router-dom'

export const SBar = ({ props }) => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
        <Link to="/auth">
          <S.SidebarIcon>
            <S.SidebarIconSvg alt="logout">
              <use xlinkHref="/img/icon/sprite.svg#icon-logout" />
            </S.SidebarIconSvg>
          </S.SidebarIcon>
        </Link>
      </S.SidebarPersonal>
      {props}
    </S.MainSidebar>
  )
}
