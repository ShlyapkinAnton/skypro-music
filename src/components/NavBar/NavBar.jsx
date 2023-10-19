import { useState } from 'react';
import * as S from "../NavBar/NavBarStyled";

export default function Bar() {

  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.Burger type='button' onClick={handleMoreClick}><S.NavBurger>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger></S.Burger>
      {showMore && <S.NavMenu>
        <S.MenuList>
          <S.MenuItem><S.MenuLink href="/#" >Главное</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink href="/#" >Мой плейлист</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink href="../signin.html" >Войти</S.MenuLink></S.MenuItem>
        </S.MenuList>
      </S.NavMenu>}
    </S.MainNav>
  )
}
