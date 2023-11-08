import * as S from './registerStyled'

const RegisterPage = () => {
  return (
    <S.ContainerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <S.ModalFormLoginLink href="../">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLoginLink>
          <S.ModalInput type="text" name="login" placeholder="Почта" />
          <S.ModalInput type="new-password" name="password" placeholder="Пароль" />
          <S.ModalInput type="new-password" name="password" placeholder="Повторите пароль" />
          <S.ModalBtnSignupEnt>
            <S.ModalBtnSignupEntLink href="../index.html">Зарегистрироваться</S.ModalBtnSignupEntLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  )
}
