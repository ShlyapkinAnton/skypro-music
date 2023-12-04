import { useRef, useState, useEffect } from 'react'
// import { ProgressBar } from './ProgressBar/ProgressBar';
import * as S from './AudioPlayersStyled'
import { formatTime } from '../time'
import { useDispatch, useSelector } from 'react-redux'
import {
  setIsPlaying,
  setNextTrack,
  setPrevTrack,
  toggleShuffleTracks,
} from '../../store/slices/trackSlice'
import {
  ActiveTrackSelector,
  isPlayingSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
  indexActiveTrackSelector,
  currentPlaylistSelector,
} from '../../store/selectors/index'
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from '../../serviceQuery/tracks'

export const Player = ({ isLoading = true }) => {
  const tracks = useSelector(currentPlaylistSelector)
  const activeTrack = useSelector(ActiveTrackSelector) || {} // получить
  const isPlaying = useSelector(isPlayingSelector)
  const indexActiveTrack = useSelector(indexActiveTrackSelector)
  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const dispatch = useDispatch()
  const [progressOn, setProgressOn] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoop, setIsLoop] = useState(false)
  const [isVolume, setIsVolume] = useState(1)
  const audioRef = useRef(null)

  // Кнопка плей и пауза
  const handleStart = () => {
    audioRef.current.play()
    dispatch(setIsPlaying(true))
  }
  const handleStop = () => {
    audioRef.current.pause()
    dispatch(setIsPlaying(false))
  }
  const togglePlay = isPlaying ? handleStop : handleStart
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  // Запуск треда после клика
  useEffect(() => {
    if (activeTrack) {
      audioRef.current.addEventListener('loadeddata', () => {
        handleStart()
      })
      audioRef.current.onended = () => {
        if (indexActiveTrack < arrayTracksAll.length - 1) {
          dispatch(
            setNextTrack({
              nextTrack:
                arrayTracksAll[arrayTracksAll.indexOf(activeTrack) + 1],
              indexNextTrack: arrayTracksAll.indexOf(activeTrack) + 1,
            })
          )
        }
      }
    }
  }, [activeTrack])

  // Кнопка следющий трек
  const nextToggle = () => {
    if (indexActiveTrack < arrayTracksAll.length - 1) {
      const indexNextTrack = arrayTracksAll.indexOf(activeTrack) + 1
      return dispatch(
        setNextTrack({
          nextTrack: arrayTracksAll[indexNextTrack],
          indexNextTrack,
        })
      )
    }
  }
  // Кнопка предыдущий трек
  const prevToggle = () => {
    if (indexActiveTrack > 0) {
      const indexPrevTrack = arrayTracksAll.indexOf(activeTrack) - 1
      return dispatch(
        setPrevTrack({
          prevTrack: arrayTracksAll[indexPrevTrack],
          indexPrevTrack,
        })
      )
    }
  }

  // Кнопка повтора
  const toggleLoop = () => {
    setIsLoop(!isLoop)
  }

  // Регулировка громкости
  useEffect(() => {
    audioRef.current.volume = isVolume / 100
  }, [isVolume])

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const onTimeUpdate = () => {
    setProgressOn(audioRef.current.currentTime)
  }

  const handleDurationChange = (event) => {
    setProgressOn(event.target.value)
    audioRef.current.currentTime = event.target.value
  } //изменение ползунка прокрутки

  useEffect(() => {
    if (activeTrack) {
      setDuration(audioRef.current.duration)
    }
  }, [setDuration])

  const [setLike] = useSetLikeMutation()
  const [setDislike] = useSetDislikeMutation()
  const auth = JSON.parse(localStorage.getItem('user'))
  const isUserLike = Boolean(
    activeTrack?.stared_user?.find((user) => user.id === auth.id)
  )
  const [isLiked, setIsLiked] = useState(isUserLike)

  useEffect(() => {
    if (activeTrack?.stared_user) {
      setIsLiked(isUserLike)
    } else {
      setIsLiked(true)
    }
  }, [isUserLike, activeTrack?.stared_user])

  const handleLike = async (id) => {
    setIsLiked(true)
    await setLike({ id }).unwrap()
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    await setDislike({ id }).unwrap()
  }

  const toggleLikeDislike = (id) => {
    isLiked ? handleDislike(id) : handleLike(id)
  }

  return (
    <S.Bar>
      <S.DurationBlock>
        {formatTime(progressOn)} / {formatTime(duration)}
      </S.DurationBlock>
      <audio
        style={{ display: 'none' }}
        loop={isLoop}
        ref={audioRef}
        src={activeTrack.track_file}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        controls
      ></audio>
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
              <S.PlayerBtnPrev onClick={prevToggle}>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>

              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-${
                      isPlaying ? 'pause' : 'play'
                    }`}
                  />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>

              <S.PlayerBtnNext onClick={nextToggle}>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>

              <S.PlayerBtnRepeat onClick={toggleLoop}>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-${
                      isLoop ? 'repeat-act' : 'repeat'
                    }`}
                  />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>

              <S.PlayerBtnShuffle
                onClick={() => {
                  dispatch(toggleShuffleTracks(!shuffle))
                }}
              >
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-${
                      shuffle ? 'shuffle-act' : 'shuffle'
                    }`}
                  />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  {' '}
                  {isLoading ? (
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>
                  ) : (
                    <S.HiddenBig></S.HiddenBig>
                  )}
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {' '}
                  {isLoading ? (
                    <S.TrackPlayAuthorLink href="http://">
                      {activeTrack.name}
                    </S.TrackPlayAuthorLink>
                  ) : (
                    <S.HiddenSmall></S.HiddenSmall>
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {' '}
                  {isLoading ? (
                    <S.TrackPlayAlbumLink href="http://">
                      {activeTrack.author}
                    </S.TrackPlayAlbumLink>
                  ) : (
                    <S.HiddenSmall></S.HiddenSmall>
                  )}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike
                  onClick={() => toggleLikeDislike(activeTrack.id)}
                >
                  <S.TrackPlayLikeSvg alt="like" $active={isLiked}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
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
