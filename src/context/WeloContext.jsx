import { createContext, useEffect, useMemo, useRef, useState } from "react"
import loadingImg from "./../../images/loading/loading.gif"
import loadingImgGut from "./../../images/loading/gut.jpg"
import loadingImgPloho from "./../../images/loading/ploho.jpg"

export const WeloContext = createContext(null)

export const Logic = ({ children }) => {
  const [content, setContent] = useState({
    h1: "Главная",
    tarifs: false,
    contacts: false,
    window: false,
    glav: true,
  })

  const [pole, setPole] = useState({
    name: "",
    fam: "",
    tel: "",
    tarif: "baza",
  })

  const [infoServer, setInfoServer] = useState({
    text: "Подождите пожалуйста...",
    src: loadingImg,
  })

  const animBeauty = useRef(null)
  const targetAnim = animBeauty.current

  useEffect(() => {
    console.log("поле: ", pole)
  }, [pole])

  const onClickGlobal = (name) => {
    resetState()
    if (name === "tar") {
      setContent({
        h1: "Тарифы",
        tarifs: true,
      })
    }
    if (name === "con") {
      setContent({
        h1: "Контакты",
        contacts: true,
      })
    }
    if (name === "win") {
      setContent({
        h1: "Окошко",
        window: true,
      })
    }
    if (name === "glav") {
      setContent({
        h1: "Главная",
        glav: true,
      })
    }
  }

  const resetState = () => {
    setContent({
      tarifs: false,
      contacts: false,
      window: false,
      glav: false,
    })
  }

  const submitData = () => {
    targetAnim.classList.add("window-submit-active")
    fetch("http://localhost:5001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pole),
    })
      .then((response) => {
        if (!response.ok) {
          const err = `Ошибка ${response.status}`
          throw new Error(err)
        }
        return response.json() //этот медот JSON.parse
      })
      .then((json) => {
        console.log("вот твой же объект тебе:", json)
        setInfoServer({
          text: "Данные сохранены!",
          src: loadingImgGut,
        })
        setTimeout(() => {
          targetAnim.classList.remove("window-submit-active")
        }, 3000)

        return json
      })
      .catch((err) => {
        console.log(err)
        setInfoServer({
          text: `Беда: ${err.message}`,
          src: loadingImgPloho,
        })
        setTimeout(() => {
          targetAnim.classList.remove("window-submit-active")
        }, 3000)
      })
  }

  const value = useMemo(
    () => ({
      onClickGlobal,
      content,
      setContent,
      submitData,
      setPole,
      pole,
      animBeauty,
      infoServer,
    }),
    [content, pole, animBeauty, infoServer],
  )

  return <WeloContext.Provider value={value}>{children}</WeloContext.Provider>
}
