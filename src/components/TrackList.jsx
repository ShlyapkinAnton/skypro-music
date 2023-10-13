import { useState } from 'react';
import './TrackList.css'
import SearchBlock from './SearchBlock'
import Tracks from './Tracks'

export default function Lists() {

  const [filterPerformerVisible, setVisible] = useState(false);
  const filterPerformerClick =()=>{
    setVisible(!filterPerformerVisible);
    setYearVisible(false)
    setStyleVisible(false)
  }

  const [filterYearVisible, setYearVisible] = useState(false);
  const filterYearClick =()=>{
    setYearVisible(!filterYearVisible);
    setStyleVisible(false)
    setVisible(false)
  }

  const [filterStyleVisible, setStyleVisible] = useState(false);
  const filterStyleClick =()=>{
    setStyleVisible(!filterStyleVisible);
    setVisible(false)
    setYearVisible(false)
  }

  const dropdown = {
    'background-color' : '#313131',
    'padding' : ' 34px',
    'border-radius' : '12px',
    'width' : '248px',
    'max-height' : '305px',
    'position' : 'absolute',
    'top' : 'calt(100% + 5px)',
  }

  return (
    <div className="main__centerblock centerblock">
      <SearchBlock/>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__performer">
          <button onClick={filterPerformerClick} className="filter__button button-author _btn-text" type='button'>исполнителю</button>
          <div id="element" className={`${filterPerformerVisible ? "display_yes" : "display_no"}`} style={dropdown}>
            <a href="#" className="button__author-item">Nero</a>
            <a href="#" className="button__author-item">Dynoro</a>
            <a href="#" className="button__author-item">Outwork</a>
            <a href="#" className="button__author-item">Mr. Gee</a>
            <a href="#" className="button__author-item">Ali Bakgor</a>
            <a href="#" className="button__author-item">Psychopath</a>
            <a href="#" className="button__author-item">Jaded</a>
            <a href="#" className="button__author-item">Will Clarke</a>
            <a href="#" className="button__author-item">AR/CO</a>
            <a href="#" className="button__author-item">Blue Foundation</a>
            <a href="#" className="button__author-item">Zeds Dead</a>
            <div className="overflow"></div>
          </div>
        </div>
        <div className="filter_year">
          <button onClick={filterYearClick} className="filter__button button-year _btn-text" type='button'>году выпуска</button>
          <ul className={`${filterYearVisible ? "display_yes" : "display_no"}`} style={dropdown}>
            <li className="button__year-item">По умолчанию</li>
            <li className="button__year-item">Сначала новые</li>
            <li className="button__year-item">Сначала старые</li>
          </ul> 
        </div>
        <div className="filter_style">
          <button  onClick={filterStyleClick} className="filter__button button-genre _btn-text" type='button'>жанру</button>
          <ul className={`${filterStyleVisible ? "display_yes" : "display_no"}`} style={dropdown}>
            <li className="button__genre-item">Рок</li>
            <li className="button__genre-item">Хип-хоп</li>
            <li className="button__genre-item">Поп-музыка</li>
            <li className="button__genre-item">Техно</li>
            <li className="button__genre-item">Инди</li>
          </ul> 
        </div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <Tracks/>
      </div>
    </div>
  )
}
