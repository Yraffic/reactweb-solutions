import { createContext, useState } from "react"
import { IAppcontext, IChildren } from "../types"


export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: IChildren) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const value = {
        openModal,
        setOpenModal
    }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}