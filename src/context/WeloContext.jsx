import { createContext, useEffect, useMemo, useState } from "react"

export const WeloContext = createContext(null)

export const Logic = ({ children }) => {
  const [content, setContent] = useState({
    tarifs: true,
    contacts: false,
    window: false,
  })

  const onClickGlobal = (name) => {
    resetState()
    if (name === "tar") {
      setContent({
        tarifs: true,
      })
    }
    if (name === "con") {
      setContent({
        contacts: true,
      })
    }
    if (name === "win") {
      setContent({
        window: true,
      })
    }
  }

  const resetState = () => {
    setContent({
      tarifs: false,
      contacts: false,
      window: false,
    })
  }

  const submitData = () => {
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
        return json
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const [pole, setPole] = useState({
    name: "",
    fam: "",
    tel: "",
    tarif: "baza",
  })

  useEffect(() => {
    console.log("поле: ", pole)
  }, [pole])

  const value = useMemo(
    () => ({
      onClickGlobal,
      content,
      setContent,
      submitData,
      setPole,
      pole,
    }),
    [content, pole],
  )

  return <WeloContext.Provider value={value}>{children}</WeloContext.Provider>
}
