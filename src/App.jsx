import { useContext } from "react"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Tarifs from "./components/Tarifs"
import Window from "./components/Window"
import Glav from "./components/Glav"
import { WeloContext } from "./context/WeloContext"

const App = () => {
  const { content } = useContext(WeloContext)

  return (
    <>
      <div className="container">
        <Header />
        <main className="main global-section">
          <h1>{content.h1}</h1>
          {content.tarifs && <Tarifs />}
          {content.contacts && <Contacts />}
          {content.glav && <Glav />}

        </main>
        <Footer />
      </div>
      {content.window && <Window />}
    </>
  )
}

export default App
