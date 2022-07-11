import { createContext } from "react";

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext({
    nomeDoUsuario: "Kevin Alves Da Silva",
});

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ( {children} ) => {
    
    return (
       <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Kevin Alves Da Silva" }}>
          {children}
       </UsuarioLogadoContext.Provider>
    );

};