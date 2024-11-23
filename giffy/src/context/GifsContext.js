import { createContext, useState } from "react";

const Context = createContext({})

export function GifsContextProvider({children}){
const [gifs, useGifs] = useState([])

    return <Context.Provider value={{ gifs, useGifs}}>
        {children}
    </Context.Provider>
}
export default Context