import * as S from './loginStyled'

export const LoginPage = ({ setUser }) => {
  console.log('setUser:', setUser)
  return (
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <S.ModalFormLoginLink href="../">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLoginLink>
          <S.ModalLoginInput type="text" name="login" placeholder="Почта" />
          <S.ModalInput type="password" name="password" placeholder="Пароль" />
          <S.ModalBtnEnter onClick={() => setUser(true)}>
            <S.ModalBtnEnterLink to="/">Войти</S.ModalBtnEnterLink>
          </S.ModalBtnEnter>
          <S.ModalBtnSignup onClick={() => setUser(false)}>
            <S.ModalBtnSignupLink to="/register">
              Зарегистрироваться
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  )
}
