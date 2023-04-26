import React, { createContext, useState, useEffect, useRef } from 'react';

const Context = createContext();

function AuthProvider({ children }) {

    // ESTADOS
    const [logado, isLogado] = useState(() => {
        const storedIsLogged = localStorage.getItem('logado');
        return storedIsLogged ? JSON.parse(storedIsLogged) : false;
    });

    const sectionSobreRef = useRef(null);
    const handleButtonClick = () => {
        sectionSobreRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    const [infoCliente, setInfoCliente] = useState(() => {
        const storedInfoCliente = localStorage.getItem('infoCliente');
        return storedInfoCliente ? JSON.parse(storedInfoCliente) : {};
    })

    const [infoEmpresa, setInfoEmpresa] = useState(() => {
        const storedInfoEmpresa = localStorage.getItem('infoEmpresa');
        return storedInfoEmpresa ? JSON.parse(storedInfoEmpresa) : {};
    })

    // GUARDANDO NO LOCAL STORAGE
    useEffect(() => {
        // recupera o valor do local storage quando a página é carregada
        const storedIsLogged = localStorage.getItem('logado');
        if (storedIsLogged) {
            isLogado(JSON.parse(storedIsLogged));
        }

        const storedInfoCliente = localStorage.getItem('infoCliente');
        if (storedInfoCliente) {
            setInfoCliente(JSON.parse(storedInfoCliente));
        }

        const storedInfoEmpresa = localStorage.getItem('infoEmpresa');
        if (storedInfoEmpresa) {
            setInfoEmpresa(JSON.parse(storedInfoEmpresa));
        }
    }, []);

    // ATUALIZANDO O LOCAL STORAGE

    useEffect(() => {
        localStorage.setItem('logado', JSON.stringify(logado));
    }, [logado]);
    useEffect(() => {
        localStorage.setItem('infoCliente', JSON.stringify(infoCliente));
    }, [infoCliente]);
    useEffect(() => {
        localStorage.setItem('infoEmpresa', JSON.stringify(infoEmpresa));
    }, [infoEmpresa]);

    return (
        // PASSANDO OS ESTADOS PARA TODOS OS COMPONENTES
        <Context.Provider value={{ logado, isLogado, email, setEmail, password, setSenha, infoCliente, setInfoCliente, infoEmpresa, setInfoEmpresa, handleButtonClick, sectionSobreRef }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };