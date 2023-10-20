import { useState } from 'react';
import * as S from "./AudioPlayersStyled";

export const Player = () => {
  const [contentVisible, setContentVisible] = useState(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 4000);

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress/>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage> { contentVisible ? (
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>): (<S.HiddenBig></S.HiddenBig>)}
                </S.TrackPlayImage>
                <S.TrackPlayAuthor> { contentVisible ? (
                  <S.TrackPlayAuthorLink href="http://">
                    Ты та...
                  </S.TrackPlayAuthorLink>): (<S.HiddenSmall></S.HiddenSmall>)}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum> { contentVisible ? (
                  <S.TrackPlayAlbumLink href="http://">
                    Баста
                  </S.TrackPlayAlbumLink>): (<S.HiddenSmall></S.HiddenSmall>)}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
