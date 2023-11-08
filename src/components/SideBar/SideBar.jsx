import * as S from './SideBarStyles'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../../Context/UserContext.js';

export const SBar = ({ props }) => {
  const user = useContext(UserContext);

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
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
