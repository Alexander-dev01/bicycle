import { useContext } from "react"
import { WeloContext } from "../../src/context/WeloContext"
import Logo from "./../../images/logo.jpg"


const Header = () => {
  const { onClickGlobal } = useContext(WeloContext)
  return (
    <header className="header global-section">
      <div className="logo">
        <div className="logo-div">
          <img src={Logo} alt="" />
        </div>
        Велопрокат Волгодонск
      </div>
      <ul className="nav__list">
        <li>
          <button
            onClick={() => {
              onClickGlobal("glav")
            }}
          >
            Главная
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClickGlobal("tar")
            }}
          >
            Тарифы
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClickGlobal("con")
            }}
          >
            Контакты
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClickGlobal('win')
            }}
          >
            Отправить заявку
          </button>
        </li>
      </ul>
    </header>
  )
}
export default Header
