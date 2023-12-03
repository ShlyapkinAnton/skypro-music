import * as S from './notfoundStyled'

export const NotFoundPage = () => {
  return (
    <S.ContainerCenter>
      <S.ContainerBig>404</S.ContainerBig>
      <S.ContainerHeader>Страница не найдена</S.ContainerHeader>
      <S.ContainerText>
        Возможно, она была удалена или перенесена на другой адрес
      </S.ContainerText>
      <S.ContainerButton>
        <S.ContainerButtonLink to="/">
          Вернуться на главную
        </S.ContainerButtonLink>
      </S.ContainerButton>
    </S.ContainerCenter>
  )
}
