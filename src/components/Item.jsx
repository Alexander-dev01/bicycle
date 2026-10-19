import { useContext } from "react"
import { WeloContext } from "../../src/context/WeloContext"

const Item = (props) => {
  const { img, h2, text, price } = props
  const { onClickGlobal } = useContext(WeloContext)

  return (
    <li className="welik-item">
      <div className="welik-img">
        <img src={`./images/${img}.jpg`} alt="welik" />
      </div>
      <h2 className="welik-h2">{h2}</h2>
      <ul className="welik-text">
        {text.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
      <div className="welik-price">Цена: {price} р./час</div>
      <button
        className="welik-button "
        onClick={(event) => {
          onClickGlobal('win')
        }}
      >
        Заказать
      </button>
    </li>
  )
}
export default Item
