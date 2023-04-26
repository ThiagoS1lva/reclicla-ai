import styles from './Cadastro.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Cliente from '/cliente.png';
import Empresa from '/empresa.png';


function Cadastro() {
    const [cliente, setCliente] = useState(true);
    const [username, setUsername] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');

    // Função para enviar o formulario

    async function handleSubmitCliente(event) {
        event.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 500);
        const formData = { username, email, password, telefone, cep };

        try {
            const response = await fetch('https://reclicla.onrender.com/Cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            alert("Cliente cadastrado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSubmitEmpresa(event) {
        event.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 500);
        const formData = { nome, telefone, cnpj, email, password };

        try {
            const response = await fetch('https://reclicla.onrender.com/Empresa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            alert("Empresa cadastrada com sucesso!")
        } catch (error) {
            console.log(error);
        }
    }




    // Funções para mudar o tipo de cadastro
    function handleEmpresa() {
        setCliente(false);
    }
    function handleCliente() {
        setCliente(true);
    }



    return (
        <>
            <div className={styles.container}>
                {cliente ?
                    <div className={styles.containerCadastro}>
                        <h1>Cadastre-se</h1>
                        <div style={{ marginBottom: '4%' }}>
                            <img src={Cliente} width='10%' />
                        </div>
                        <div className={styles.btnCE}>
                            <Button onClick={handleCliente}>Cliente</Button>
                            <Button variant="outline-secondary" onClick={handleEmpresa}>Empresa</Button>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmitCliente}>
                            <label>Digite seu nome</label>
                            <input type="text" placeholder="Digite seu nome" required value={username} onChange={(event) => setUsername(event.target.value)} />

                            <label>Digite seu telefone</label>
                            <input type="text" placeholder="Digite seu telefone" required value={telefone} onChange={(event) => setTelefone(event.target.value)} />

                            <label>Digite seu CEP Ex.:12345678</label>
                            <input type="text" maxLength={8} minLength={8} placeholder="Digite seu CEP" required value={cep} onChange={(event) => setCep(event.target.value)} />

                            <label>Digite seu email</label>
                            <input type="email" placeholder="Digite seu email" required value={email.toLowerCase()} onChange={(event) => setEmail(event.target.value)} />

                            <label>Digite sua senha</label>
                            <input type="password" placeholder="Digite sua senha" required value={password} onChange={(event) => setPassword(event.target.value)} />


                            <p>Possue uma conta?</p>
                            <Link to="/login">Faça Login</Link>
                            <button role='button'>Cadastrar</button>
                        </form>
                    </div>

                    :

                    <div className={styles.containerCadastro}>
                        <h1>Cadastre-se</h1>
                        <div style={{ marginBottom: '4%' }}>
                            <img src={Empresa} width='10%' />
                        </div>
                        <div className={styles.btnCE}>
                            <Button variant="outline-primary" onClick={handleCliente}>Cliente</Button>
                            <Button variant="secondary" onClick={handleEmpresa}>Empresa</Button>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmitEmpresa}>
                            <label>Digite o nome da sua empresa</label>
                            <input type="text" placeholder="Digite o nome da sua empresa" required value={nome} onChange={(event) => setNome(event.target.value)}/>

                            <label>Digite o telefone</label>
                            <input type="text" placeholder="Digite o telefone" required value={telefone} onChange={(event) => setTelefone(event.target.value)}/>

                            <label>Digite o CNPJ</label>
                            <input type="text" maxLength={14} minLength={14} placeholder="Digite o CNPJ" required value={cnpj} onChange={(event) => setCnpj(event.target.value)}/>

                            <label>Digite o email</label>
                            <input type="email" placeholder="Digite o email" required value={email} onChange={(event) => setEmail(event.target.value)}/>

                            <label>Digite a senha</label>
                            <input type="password" placeholder="Digite sua senha" required value={password} onChange={(event) => setPassword(event.target.value)}/>


                            <p>Possue uma conta?</p>
                            <Link to="/login">Faça Login</Link>
                            <button role='button'>Cadastrar</button>
                        </form>
                    </div>
                }
            </div>
        </>
    )
}

export default Cadastro;