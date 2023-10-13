import { useState } from 'react';
import './NavBar.css'

export default function Bar() {

  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <button type='button' className="burger" onClick={handleMoreClick}><div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div></button>
      {showMore && <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item"><a href="/#" className="menu__link">Главное</a></li>
          <li className="menu__item"><a href="/#" className="menu__link">Мой плейлист</a></li>
          <li className="menu__item"><a href="../signin.html" className="menu__link">Войти</a></li>
        </ul>
      </div>}
    </nav>
  )
}
