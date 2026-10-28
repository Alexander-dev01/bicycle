import { useContext } from "react"
import { WeloContext } from "../../src/context/WeloContext"
const Input = (props) => {
  const { type = "text", placeholder, valueProp } = props
  const { pole, setPole } = useContext(WeloContext)

  return (
    <div className="field">
      <p>{placeholder}</p>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={pole[valueProp]}
        maxLength={15}
        onInput={(event) => {
          const { value } = event.target
          setPole((prev) => ({ ...prev, [valueProp]: value }))
        }}
      />
    </div>
  )
}
export default Input
