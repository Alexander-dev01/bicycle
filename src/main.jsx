import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./../style/reset.css"
import "./../style/fonts.css"
import "./../style/variables.css"
import "./../style/style.css"
import { Logic } from "./context/WeloContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Logic>
      <App />
    </Logic>
  </StrictMode>,
)
