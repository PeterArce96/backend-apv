import { createContext, useState, useEffect } from "react";
import clienteAxios from '../config/axios'

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {
    
    const [pacientes, setPacientes] = useState([])

    return(
        <PacientesContext.Provider
            value={{
                pacientes
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