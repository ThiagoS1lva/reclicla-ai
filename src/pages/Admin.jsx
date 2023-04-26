import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/AuthContext'
import styles from './Admin.module.css'
import { AiFillDelete } from 'react-icons/ai'

function Admin() {
    const { infoCliente } = useContext(Context);

    //fetch para listar todos os clentes
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        fetch('https://reclicla.onrender.com/Clientes')
            .then(response => response.json())
            .then(data => setClientes(data))
    }, [clientes])

    //fetch para listar todas as empresas
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        fetch('https://reclicla.onrender.com/Empresas')
            .then(response => response.json())
            .then(data => setEmpresas(data))
    }, [empresas])

    //fetch para deletar um cliente
    const handleDeleteCliente = (id) => {
        fetch(`https://reclicla.onrender.com/Cliente/id/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Remove o cliente deletado da lista de clientes
                    const newClientes = clientes.filter(cliente => cliente.id !== id);
                    setClientes(newClientes);
                } else {
                    throw new Error('Falha ao deletar cliente');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    //fetch pra deletar uma empresa
    const handleDeleteEmpresa = (id) => {
        fetch(`https://reclicla.onrender.com/Empresa/id/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Remove a empresa deletada da lista de empresas
                    const newEmpresas = empresas.filter(empresa => empresa.id !== id);
                    setEmpresas(newEmpresas);
                } else {
                    throw new Error('Falha ao deletar empresa');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <>
            {infoCliente.email === 'admin@admin' ?
                (
                    <div>
                        <h2>Painel de exclusão do Admin:</h2>
                        <div className={styles.container}>
                            <div className={styles.row1}>
                                <h3>Clientes:</h3>
                                <div className={styles.info}>
                                    {clientes.map((cliente) => (
                                        <div className={styles.divInfo} key={cliente.id}>
                                            <p><b>Nome:</b> {cliente.username}</p>
                                            <p><b>Telefone:</b> {cliente.telefone}</p>
                                            <p><b>CEP:</b> {cliente.CEP}</p>
                                            <p><b>E-mail:</b> {cliente.email}</p>
                                            <button onClick={() => handleDeleteCliente(cliente.ID)}><AiFillDelete size='25' /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.row2}>
                                <h3>Empresas:</h3>
                                <div className={styles.info}>
                                    {empresas.map((empresa) => (
                                        <div className={styles.divInfo} key={empresa.id}>
                                            <p><b>Nome:</b> {empresa.nome}</p>
                                            <p><b>Telefone:</b> {empresa.telefone}</p>
                                            <p><b>CNPJ:</b> {empresa.CNPJ}</p>
                                            <p><b>E-mail:</b> {empresa.email}</p>
                                            <button onClick={() => handleDeleteEmpresa(empresa.id)}><AiFillDelete size='25' /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div style={{ minHeight: '75vh', display: 'flex' }}>
                        <h1 style={{ margin: 'auto auto' }}>Você não tem permissão pra acessar essa página!</h1>
                    </div>
                )}
        </>
    )
}
export default Admin