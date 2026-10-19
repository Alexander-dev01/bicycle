import { useContext } from "react"
import { WeloContext } from "../../src/context/WeloContext"
import Input from "./input"

const Window = () => {
  const { onClickGlobal, submitData, pole, setPole } = useContext(WeloContext)
  return (
    <div className="background__window">
      <form
        className="window"
        onSubmit={(event) => {
          event.preventDefault()
          submitData()
        }}
      >
        <h2>Выбрать тариф</h2>
        <button
          className="button-close"
          onClick={() => {
            onClickGlobal("tar")
          }}
        >
          <svg
            fill="#000000"
            width="24"
            height="24"
            viewBox="0 0 490 490"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490 490,386.812 348.187,244.999 490,103.187" />
          </svg>
        </button>

        <Input placeholder="Ваше Имя" valueProp="name" />
        <Input placeholder="Ваша Фамилия" valueProp="fam" />
        <Input type="tel" placeholder="Номер телефона" valueProp="tel" />
        <p>Тариф</p>
        <select
          name="tarif"
          value={pole.tarif}
          onInput={(event) => {
            const { value } = event.target
            setPole((prev) => ({ ...prev, tarif: value }))
          }}
        >
          <option value="eko">Эконом вариант</option>
          <option value="baza">Базовый вариант</option>
          <option value="speed">Скорость</option>
          <option value="prem">Премиум</option>
        </select>

        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}
export default Window
