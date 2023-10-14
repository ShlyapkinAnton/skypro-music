import * as S from './SideBarStyles'
import PlayList from '../PlayLists/PlayLists'

export default function SBar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.SidebarIconSvg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </S.SidebarIconSvg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <PlayList />
    </S.MainSidebar>
  )
}
