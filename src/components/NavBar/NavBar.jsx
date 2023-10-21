import { useState } from 'react';
import * as S from "../NavBar/NavBarStyled";

export const Bar = ({ user, setUser }) => {

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  console.log(user);

  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.Burger type='button' onClick={handleMoreClick}><S.NavBurger>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger></S.Burger>
      {showMore && <S.NavMenu>
        <S.MenuList>
          <S.MenuItem><S.MenuLink to="/" >Главное</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink to="/favorites" >Мой плейлист</S.MenuLink></S.MenuItem>
          <S.MenuItem><S.MenuLink to="/login" onClick={user !== null && handleLogout} >{ setUser ? 'ВЫЙТИ' : 'Войти' }</S.MenuLink ></S.MenuItem>
        </S.MenuList>
      </S.NavMenu>}
    </S.MainNav>
  )
}
