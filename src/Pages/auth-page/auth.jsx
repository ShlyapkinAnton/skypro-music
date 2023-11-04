import { Link, Navigate, useNavigate  } from 'react-router-dom'
import * as S from './authStyled'
import { useEffect, useState } from 'react'
import { getSignUp, getSignIn } from '../../Api.js'

export const AuthPage = ({ isLoginMode, setIsLoginMode, setUser }) => {
  const [error, setError] = useState(null)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()
  const [buttonActive, setButtonActive] = useState(false)

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) {
      setError("Заполните поле ввода");
      return
    }
    try {
      setButtonActive(true);
      await getSignIn({ email, password })
      .then((json) => {
        alert(`Выполняется вход: ${email} ${password}`);
        localStorage.setItem('user', json.username);
        setUser(localStorage.getItem('user'));
        setError(null);
        navigate("/", {replace:true});
      })
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
      setError(error.message);
    } finally {
      setButtonActive(false);
    }
  } 

  const handleRegister = async () => {
    if (!username || !email || !password || !repeatPassword) {
      setError("Заполните поле ввода");
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    try {
      setButtonActive(true);
      await getSignUp({username, email, password})
      .then((json) => {
        alert(`Выполняется регистрация: ${email} ${password}`);
        localStorage.setItem('user', json.username);
        setUser(true);
        setError(null);
        setIsLoginMode(true)
        navigate("/", {replace:true});
      })
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
      setError(error.message);
    } finally {
      setButtonActive(false);
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
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
              <S.PrimaryButton disabled={buttonActive} onClick={() => handleLogin({ email, password })}>
                {buttonActive ? 'Выполняется вход...' : 'Войти' }
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
                {buttonActive ? 'Выполняется регистрация...' : 'Зарегистрироваться' }
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
