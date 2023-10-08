import '../App.css';

export default function SBar() {
    return <div className="main__sidebar sidebar">
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__icon">
        <svg alt="logout">
          <use xlinkHref="public/icon/sprite.svg#logout" />
        </svg>
      </div>
    </div>
    <div className="sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a className="sidebar__link" href="/#">
            <img
              className="sidebar__img"
              src="public/playlist01.png"
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="/#">
            <img
              className="sidebar__img"
              src="public/playlist02.png"
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="/#">
            <img
              className="sidebar__img"
              src="public/playlist03.png"
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
}