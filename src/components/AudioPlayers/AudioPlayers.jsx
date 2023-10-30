import { useRef, useState, useEffect } from 'react';
// import { ProgressBar } from './ProgressBar/ProgressBar.jsx';
import * as S from "./AudioPlayersStyled";
import { formatTime } from './time.jsx'

export const Player = ({ playerVisible, setPlayerVisible, activeTrack, setActiveTrack }) => {
  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 4000);

  // Кнопка плей и пауза
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const togglePlay = isPlaying ? handleStop : handleStart;

  // Запуск треда после клика
  useEffect(()=> {
    if (activeTrack) {
      handleStart();
    }
  },[activeTrack])

  // Кнопка повтора
  const [isLoop, setIsLoop] = useState(false)
  const toggleLoop = () => {
    setIsLoop(!isLoop);
  } 

  // Регулировка громкости
  const [isVolume, setIsVolume] = useState(1)
  useEffect(()=> {
    audioRef.current.volume = isVolume/100;
  }, [isVolume])


  // Регулировка текущей позиции воспроизведения
  const [progressOn, setProgressOn] = useState(0);
  const [duration, setDuration] = useState(0);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onTimeUpdate = () => {
    setProgressOn(audioRef.current.currentTime);
  };

  const handleDurationChange = (event) => {
    setProgressOn(event.target.value);
    audioRef.current.currentTime = event.target.value
  }//изменение ползунка прокрутки

  useEffect(()=> {
    audioRef.current.currentTime = progressOn;
    // console.log(progressOn);
    if (activeTrack.duration_in_seconds){
      setDuration(audioRef.current.duration)
    }
    
  }, [setDuration])

 
  return (
    <S.Bar>
      <S.DurationBlock>{formatTime(progressOn)} / {formatTime(duration)}</S.DurationBlock>
      <audio style={{ display: 'none' }} loop={isLoop} ref={audioRef} src={playerVisible.track_file} onLoadedMetadata = {onLoadedMetadata} onTimeUpdate = { onTimeUpdate } controls></audio>
      <S.BarContent>

        {/* <ProgressBar currentTime={currentTime} setCurrentTime={setCurrentTime}/> */}

        <S.StyledProgressInput
          type="range"
          min={0}
          max={duration.toString()}
          value={progressOn}
          step={0.01}
          onChange={handleDurationChange}
          $color="#B672FF"
        />
        {/* <S.BarPlayerProgress/> */}
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>

                <S.PlayerBtnPrev onClick={()=>alert('Функция пока не реализована')}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>

                <S.PlayerBtnPlay onClick={togglePlay}>
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref={`/img/icon/sprite.svg#icon-${isPlaying ? "pause" : "play"}`} />
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>

                <S.PlayerBtnNext onClick={()=>alert('Функция пока не реализована')}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>

                <S.PlayerBtnRepeat onClick={toggleLoop}>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref={`/img/icon/sprite.svg#icon-${isLoop ? "repeat-act" : "repeat"}`} />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>

                <S.PlayerBtnShuffle onClick={()=>alert('Функция пока не реализована')}>
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
                      {playerVisible.name}
                    </S.TrackPlayAuthorLink>): (<S.HiddenSmall></S.HiddenSmall>)}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum> { contentVisible ? (
                    <S.TrackPlayAlbumLink href="http://">
                      {playerVisible.author}
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
                    onChange={(event) => setIsVolume(event.target.value)}
                    type="range"
                    name="range"
                    value={isVolume}
                    min={0}
                    max={100}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>

        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
