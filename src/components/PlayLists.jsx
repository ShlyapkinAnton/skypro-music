import './PlayLists.css'
import { useState } from 'react';

export default function playlist() {
    const [contentVisible, setContentVisible] = useState(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 4000);

    return (
        <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="/#"> { contentVisible ? (
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />): (<div className="hidden"></div>)}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="/#"> { contentVisible ? (
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              />): (<div className="hidden"></div>)}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="/#"> { contentVisible ? (
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              />): (<div className="hidden"></div>)}
            </a>
          </div>
        </div>
      </div>
    )
}