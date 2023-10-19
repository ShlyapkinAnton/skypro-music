 import './NotFoundStyled.css'

export default function NF() {
  return (
    <div className="container__center">
      <h1 className="container__big">404</h1>
      <h2 className="container__header">Страница не найдена</h2>
      <p className="container__text">Возможно, она была удалена или перенесена на другой адрес</p>
      <button className="container__button">Вернуться на главную</button>
    </div>
  )
}
