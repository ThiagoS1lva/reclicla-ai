import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import LoginCarousels from '../ui/components/Login/LoginCarousels';
import Button from 'react-bootstrap/Button';
import React, { useContext, useState, useEffect } from 'react';
import Cliente from '/cliente.png';
import Empresa from '/empresa.png';

import { Context } from '../contexts/AuthContext.jsx'

function Login() {

    // estados do context
    const { logado, isLogado, email, setEmail, password, setSenha, infoCliente, setInfoCliente, infoEmpresa, setInfoEmpresa } = useContext(Context);
    const [cliente, setCliente] = useState(true);
    const [errorMsg, setErroMsg] = useState('');

    //CLIENTE
    const handleSubmitCliente = (event) => {
        event.preventDefault();
        fetch('https://reclicla.onrender.com/Cliente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Login bem sucedido');
                    isLogado(true);
                    return response.json();
                } else {
                    setErroMsg('email ou senha incorretos. Tente novamente ou clique em "Esqueceu sua senha?"');
                    setTimeout(() => {
                        setErroMsg('');
                    }, 5000);
                }
            })
            .then(data => {
                if (Object.keys(data).length > 0) {
                    setInfoCliente(data);
                }
            })

            .catch(error => {
                console.log('Erro na requisição', error);
            });
    };

    //EMPRESA
    const handleSubmitEmpresa = (event) => {
        event.preventDefault();
        fetch('https://reclicla.onrender.com/Empresa/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Login bem sucedido');
                    isLogado(true);
                    return response.json();
                } else {
                    setErroMsg('email ou senha incorretos. Tente novamente ou clique em "Esqueceu sua senha?"');
                    setTimeout(() => {
                        setErroMsg('');
                    }, 5000);
                }
            })
            .then(data => {
                if (Object.keys(data).length > 0) {
                    setInfoEmpresa(data);
                }
            })
            .catch(error => {
                console.log('Erro na requisição', error);
            });
    };

    function handleDeslogar() {
        isLogado(false);
        setEmail('');
        setSenha('');
        setInfoCliente({});
        setInfoEmpresa({});
    }

    function handleEmpresa() {
        setCliente(false);
    }
    function handleCliente() {
        setCliente(true);
    }

    return (
        <div className={styles.dad}>
            <div className={styles.container}>
                {cliente ?
                    <>
                        {logado ?
                            <div className={styles.containerLogado}>
                                <h2>Você está logado como:</h2>
                                <h4>{Object.keys(infoCliente).length === 0 ? infoEmpresa.email : infoCliente.email}</h4>
                                <Button style={{ width: "30%", margin: "0 auto" }} variant='danger' onClick={handleDeslogar}>Deslogar</Button>
                            </div>

                            :

                            <div className={styles.containerLogin}>
                                <h1>Login</h1>
                                <div style={{ marginBottom: '4%' }}>
                                    <img src={Cliente} width='10%' />
                                </div>
                                <div className={styles.btnCE}>
                                    <Button onClick={handleCliente}>Cliente</Button>
                                    <Button variant="outline-secondary" onClick={handleEmpresa}>Empresa</Button>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmitCliente}>
                                    <label>Digite seu email</label>
                                    <input type="email" placeholder="Digite seu email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    <div className={styles.label}>
                                        <label>Digite sua senha</label>
                                        <Link to="/Redefinir"><label style={{cursor: "pointer"}}>Esqueceu sua senha?</label></Link>
                                    </div>
                                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(event) => setSenha(event.target.value)} />
                                    {errorMsg && <h5 className={styles.errorMsg}>{errorMsg}</h5>}
                                    <p>Não tem uma conta?</p>
                                    <Link to="/cadastro">Cadastre-se</Link>
                                    <button role='button'>Logar</button>
                                </form>
                            </div>
                        }
                    </>
                    :
                    <>
                        {logado ?
                            <div className={styles.containerLogado}>
                                <h2>Você está logado como:</h2>
                                {Object.keys(infoCliente).length === 0 ? infoEmpresa.email : infoCliente.email} {/*Bugado */}
                                <Button style={{ width: "50%", margin: "0 auto" }} variant='danger' onClick={handleDeslogar}>Deslogar</Button>
                            </div>

                            :

                            <div className={styles.containerLogin}>
                                <h1>Login</h1>
                                <div style={{ marginBottom: '4%' }}>
                                    <img src={Empresa} width='10%' />
                                </div>
                                <div className={styles.btnCE}>
                                    <Button variant="outline-primary" onClick={handleCliente}>Cliente</Button>
                                    <Button variant="secondary" onClick={handleEmpresa}>Empresa</Button>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmitEmpresa}>
                                    <label>Digite seu email</label>
                                    <input type="email" placeholder="Digite seu email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    <div className={styles.label}>
                                        <label>Digite sua senha</label>
                                        <Link to="/Redefinir"><label style={{
                                            cursor
                                                : "pointer"
                                        }}>Esqueceu sua senha?</label></Link>
                                    </div>
                                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(event) => setSenha(event.target.value)} />
                                    {errorMsg && <h5 className={styles.errorMsg}>{errorMsg}</h5>}
                                    <p>Não tem uma conta?</p>
                                    <Link to="/cadastro">Cadastre-se</Link>
                                    <button role='button'>Logar</button>
                                </form>
                            </div>
                        }
                    </>
                }


                <div className={styles.containerImage}>
                    <LoginCarousels />
                </div>
            </div>
        </div>
    )
}

export default Login;