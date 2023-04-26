import { useContext, useState, useEffect } from 'react';
import styles from './EsquecerSenha.module.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { Context } from '../contexts/AuthContext.jsx'

function EsquecerSenha() {
    const [cliente, setCliente] = useState(true);
    const { logado } = useContext(Context);
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [cep1, setCep1] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cnpj1, setCnpj1] = useState('');
    const [password, setPassword] = useState('');
    function handleCliente() {
        setCliente(true);
    }
    function handleEmpresa() {
        setCliente(false);
    }

    //pegar informações do banco de dados

    useEffect(() => {
        const url = cliente ? `https://reclicla.onrender.com/Cliente/email/${email}` : `https://reclicla.onrender.com/Empresa/email/${email}`
        try {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (cliente) {
                    setCep1(data.CEP)
                } else {
                    setCnpj1(data.CNPJ)
                }
            }).catch(err => {
                console.log('Erro ao buscar dados do banco de dados')
            })
        } catch (err) {
            console.log('Erro ao buscar dados do banco de dados')
        }
    }, [cliente, email])

    const updateData = (event) => {
        event.preventDefault()
        //verificar se o email existe
        let verificar = cliente ? `Cliente/red/${email}` : `Empresa/red/${email}`
        //verificar se o cpf ou cnpj está correto
        if ((cliente && cep === cep1) || (!cliente && cnpj === cnpj1)) {

            const newData = { password }
            fetch(`https://reclicla.onrender.com/${verificar}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao atualizar os dados!');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Dados atualizados:', data);
                    alert('Senha redefinida com sucesso!')
                    setCep('')
                    setCnpj('')
                    setPassword('')
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert(error)
                });
        } else {
            alert('CPF ou cnpj errado!')
        }

    };

    return (
        <>
            {logado ?
                <div style={{ display: 'flex', minHeight: '75vh' }}>
                    <h1 style={{ margin: 'auto auto' }}>Não é possivel redefinir a senha estando logado!</h1>
                </div>
                :
                <div className={styles.container} >
                    <h2>Redefina sua senha:</h2>
                    <div className={styles.containerRedef}>

                        {cliente ?
                            <div className={styles.btn}>
                                <Button variant='primary' onClick={handleCliente}>Cliente</Button>
                                <Button variant='outline-danger' onClick={handleEmpresa}>Empresa</Button>
                            </div>
                            : <div className={styles.btn}>
                                <Button variant='outline-primary' onClick={handleCliente}>Cliente</Button>
                                <Button variant='danger' onClick={handleEmpresa}>Empresa</Button>
                            </div>}

                        <div className={styles.containerForm}>
                            <form onSubmit={updateData} className={styles.form}>
                                <label>Email:
                                    <input type='email' value={email} required onChange={(event) => setEmail(event.target.value)} />
                                </label>
                                {cliente ?
                                    <label>CEP: ex.: 00000000
                                        <input type='number' maxLength={8} value={cep} onChange={(event) => setCep(parseInt(event.target.value))} required />
                                    </label>
                                    :
                                    <label>CNPJ:
                                        <input type='number' value={cnpj} maxLength={20} onChange={(event) => setCnpj(parseInt(event.target.value))} required />
                                    </label>}
                                <label>Nova senha:
                                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                                </label>
                                <div className={styles.containerB}>
                                    <button className={styles.botao}>Redefinir</button>
                                    <Link to='/login'><button className={styles.botao}>Cancelar</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            }

        </>
    )
}
export default EsquecerSenha