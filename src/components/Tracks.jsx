import './Tracks.css'
import { useState } from 'react';

export default function Tracks() {
  const [contentVisible, setContentVisible] = useState(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 4000);

  const Lists = [{
    id: 1,
    text: "Guilt",
    textspan: "",
    author: "Nero",
    album: "Welcome Reality",
    time: "4:44",
  },
  {
    id: 2,
    text: "Elektro",
    textspan: "",
    author: "Dynoro, Outwork, Mr. Gee",
    album: "Elektro",
    time: "2:22",
  },
  {
    id: 3,
    text: "I’m Fire",
    textspan: "",
    author: "Ali Bakgor",
    album: "I’m Fire",
    time: "2:22",
  },
  {
    id: 4,
    text: "Non Stop",
    textspan: "(Remix)",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12",
  },
  {
    id: 5,
    text: "Run Run",
    textspan: "(feat. AR/CO)",
    author: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    time: "2:54",
  },
  {
    id: 6,
    text: "Eyes on Fire",
    textspan: "(Zeds Dead Remix)",
    author: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    time: "5:20",
  },
  {
    id: 7,
    text: "Mucho Bien",
    textspan: "(Hi Profile Remix)",
    author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    time: "3:41",
  },
  {
    id: 8,
    text: "Knives n Cherries",
    textspan: "",
    author: "minthaze",
    album: "Captivating",
    time: "1:48",
  }]

  const ListItemVisible = Lists.map((list) => { 
    console.log(Lists);
    return (
      <div key={list.id} className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {list.text} <span className="track__title-span">{list.textspan}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://"> 
              {list.author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {list.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">{list.time}</span>
          </div>
        </div>
      </div>
    )
  });

  const ListItem = Lists.map((list) => { 
    console.log(Lists);
    return (
      <div key={list.id} className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image hidden__image">
            </div>
            <div className="track__title-text hidden__text">
            </div>
          </div>
          <div className="track__author hidden__author">
          </div>
          <div className="track__album hidden__album">
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="content__playlist playlist">
      {contentVisible ? ListItemVisible : ListItem}
    </div>
  )
}