import { createContext, useState, useEffect } from "react";
import clienteAxios from '../config/axios'

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {
    
    return(
        <PacientesContext.Provider
            value={{
                
            }}
        >
            {children}
        </PacientesContext.Provider>
    )
}

export {
    PacientesProvider
}

export default PacientesContext;