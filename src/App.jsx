import { useContext } from "react"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Tarifs from "./components/Tarifs"
import Window from "./components/Window"
import { WeloContext } from "./context/WeloContext"

const App = () => {
  const { content } = useContext(WeloContext)

  return (
    <>
      <div className="container">
        <Header />
        <main className="main global-section">
          <h1>Тарифы</h1>
          {content.tarifs && <Tarifs />}
          {content.contacts && <Contacts />}
        </main>
        <Footer />
      </div>
      {content.window && <Window />}
    </>
  )
}

export default App
