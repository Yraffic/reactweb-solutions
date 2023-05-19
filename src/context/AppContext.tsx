import { createContext, useState } from "react"
import { IAppcontext, IChildren } from "../types"


export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: IChildren) => {
    const [name, setName] = useState<string>('')

    const value = {
        name,
        setName
    }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}