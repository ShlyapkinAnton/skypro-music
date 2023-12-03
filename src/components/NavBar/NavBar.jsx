import { useState, useContext } from 'react'
import * as S from '../NavBar/NavBarStyled'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export const Bar = () => {
  const { handleLogout } = useContext(UserContext)
  const [showMore, setShowMore] = useState(false)
  const handleMoreClick = () => {
    setShowMore(!showMore)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src="/img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <S.Burger type="button" onClick={() => handleMoreClick()}>
        <S.NavBurger>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavBurger>
      </S.Burger>
      {showMore && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/favorites">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/auth" onClick={handleLogout}>
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
