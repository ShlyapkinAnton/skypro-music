import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as S from './authStyled'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSignUp, getSignIn } from '../../Api'
import { useAccessTokenUserMutation } from '../../serviceQuery/token'
import { setAuth } from '../../store/slices/authorizationSlice'

export const AuthPage = ({ setUser }) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()
  const [buttonActive, setButtonActive] = useState(false)

  const [postToken] = useAccessTokenUserMutation()

  const responseToken = async () => {
    await postToken({ email, password })
      .unwrap()
      .then((token) => {
        dispatch(
          setAuth({
            access: token.access,
            refresh: token.refresh,
            user: JSON.parse(localStorage.getItem('user')),
          })
        )
      })
  }

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) {
      setError('Заполните поле ввода')
      return
    }
    try {
      const response = await getSignIn({ email, password })
      // dispatch(setAuth(response))
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      responseToken()
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  const handleRegister = async () => {
    if (!username || !email || !password || !repeatPassword) {
      setError('Заполните поле ввода')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    try {
      const response = await getSignUp({ username, email, password })
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      responseToken()
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
      setIsLoginMode(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, username, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link onClick={() => setIsLoginMode(true)} to="/auth">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={buttonActive}
                onClick={() => handleLogin({ email, password })}
              >
                {buttonActive ? 'Выполняется вход...' : 'Войти'}
              </S.PrimaryButton>
              <Link onClick={() => setIsLoginMode(false)} to="/auth">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="new-password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="new-password"
                name="password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={buttonActive} onClick={handleRegister}>
                {buttonActive
                  ? 'Выполняется регистрация...'
                  : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
