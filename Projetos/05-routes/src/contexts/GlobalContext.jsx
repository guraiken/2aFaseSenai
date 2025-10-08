import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const[produto, setProduto] = useState('Mousse')
    const[produtos, setProdutos] = useState([{nome:"teclause"}, {nome: "monitor"}])
    // criar tudo que queira compartilhar acima do return
    return(
        <GlobalContext.Provider 
        value={
            {produto, setProduto , produtos}}>
            {children}
        </GlobalContext.Provider>
    )    
}
