import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/AuthContext'
import styles from './Perfil.module.css'
import { BsPencilSquare } from 'react-icons/bs';
import ListaPColeta from '../ui/components/perfil/ListaPColeta';
import { Link } from 'react-router-dom';

function Perfil() {
    const { isLogado, infoCliente, setInfoCliente, infoEmpresa, setInfoEmpresa } = useContext(Context);
    const [endereco, setEndereco] = useState(null)
    const [materiaisReciclaveis, setMateriaisReciclaveis] = useState('');
    const [horarioFuncionamento, setHorarioFuncionamento] = useState('');
    const [endereco1, setEndereco1] = useState('');
    const [msg, setMsg] = useState('');
    const [editing, setEditing] = useState(false);
    const isInfoClienteEmpty = Object.keys(infoCliente).length === 0;
    const handleEdit = () => {
        setEditing(true)
    }
    const handleCancel = () =>{
        setEditing(false)
    }
    const deslogar = () => {
        isLogado(false)
        setInfoCliente({})
        setInfoEmpresa({})
    }

    //pegar informações do cep
    useEffect(() => {
    fetch(`https://viacep.com.br/ws/${isInfoClienteEmpty ? '01001000' : infoCliente.cep}/json/`)
        .then(response => response.json())
        .then(data => setEndereco(data))
        .catch(error => console.error(error));
    },[infoCliente.cep])

    //Editar empresa e cliente
    const handleUpdate = async () => {
        const updatedItem = {
            [isInfoClienteEmpty ? "nome" : "username"]: isInfoClienteEmpty ? infoEmpresa.nome : infoCliente.username,
            telefone: isInfoClienteEmpty ? infoEmpresa.telefone : infoCliente.telefone,
            [isInfoClienteEmpty ? "cnpj" : "cep"]: isInfoClienteEmpty ? infoEmpresa.cnpj : infoCliente.cep,
            email: isInfoClienteEmpty ? infoEmpresa.email : infoCliente.email,
            password: isInfoClienteEmpty ? infoEmpresa.password : infoCliente.password,
        };
        const response = await fetch(`https://reclicla.onrender.com/${isInfoClienteEmpty ? 'Empresa/cnpj' : 'Cliente/email'}/${isInfoClienteEmpty ? infoEmpresa.cnpj : infoCliente.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });

        if (!response.ok) {
            setMsg('Erro ao atualizar item.');
            return;
        }

        setMsg('Item atualizado com sucesso!');
        setEditing(false);
        window.location.reload()

    };
    //Cadastrar ponto de coleta
    const enviarColeta = async () => {
        try {
            const response = await fetch('https://reclicla.onrender.com/Coleta', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    materiais_reciclaveis: materiaisReciclaveis,
                    horario_funcionamento: horarioFuncionamento,
                    endereco: endereco1,
                    cnpj: (infoEmpresa.cnpj).toString()
                })
            });
            if (response.ok) {
                setMsg('Ponto de coleta cadastrado com sucesso!');
                setEndereco1('');
                setHorarioFuncionamento('');
                setMateriaisReciclaveis('');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
            } else {
                setMsg('Erro ao cadastrar o ponto de coleta');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
            }
        } catch (error) {
            console.error(`Erro ao enviar os dados: ${error.message}`);
        }
    };


    return (
        <>
            <div className={styles.container}>
                <h2>Informações Pessoais</h2>
                <div className={styles.containerInfo}>
                    <div className={styles.containerInfo1}>
                        {editing ?
                            <>
                                <h3>Editando:</h3>
                                <form className={styles.formularioInfo} onSubmit={handleUpdate}>
                                    <label>
                                        Nome:
                                        <input type="text"
                                            value={isInfoClienteEmpty ? infoEmpresa.nome : infoCliente.username}
                                            onChange={
                                                isInfoClienteEmpty ?
                                                    (e) => setInfoEmpresa({ ...infoEmpresa, nome: e.target.value }) :
                                                    (e) => setInfoCliente({ ...infoCliente, username: e.target.value })
                                            } />
                                    </label>
                                    <label>
                                        Telefone:
                                        <input type="tell"
                                            value={isInfoClienteEmpty ? infoEmpresa.telefone : infoCliente.telefone}
                                            onChange={isInfoClienteEmpty ?
                                                (e) => setInfoEmpresa({ ...infoEmpresa, telefone: e.target.value }) :
                                                (e) => setInfoCliente({ ...infoCliente, telefone: e.target.value })
                                            } />
                                    </label>
                                    {isInfoClienteEmpty ? '' :
                                        <label>CEP:
                                            <input type='number'
                                                value={infoCliente.cep}
                                                onChange={
                                                    (e) => setInfoCliente({ ...infoCliente, cep: e.target.value })
                                                }
                                            />
                                        </label>}
                                    {isInfoClienteEmpty ?
                                        <label>Email:
                                            <input type="email"
                                                value={infoEmpresa.email}
                                                onChange={
                                                    (e) => setInfoEmpresa({ ...infoEmpresa, email: e.target.value })
                                                } /> </label> : ''}
                                    <label>
                                        Senha:
                                        <input type="text"
                                            value={isInfoClienteEmpty ? infoEmpresa.password : infoCliente.password}
                                            onChange={isInfoClienteEmpty ?
                                                (e) => setInfoEmpresa({ ...infoEmpresa, password: e.target.value }) :
                                                (e) => setInfoCliente({ ...infoCliente, password: e.target.value })
                                            } />
                                    </label>
                                    <div style={{ display:'flex',justifyContent:'space-between', width:'80%'}}>
                                        <input className={styles.btnInfo} type="submit" value="Salvar" />
                                        <button className={styles.btnCancel} onClick={handleCancel}>Cancelar</button>
                                    </div>
                                </form>

                            </>
                            :
                            <>
                                <div><p><b> Nome:</b> {isInfoClienteEmpty ? infoEmpresa.nome : infoCliente.username}</p></div>

                                <div><p>{isInfoClienteEmpty ? <b>CNPJ: </b> : <b>CEP: </b>}  {isInfoClienteEmpty ? infoEmpresa.cnpj : infoCliente.cep}</p></div>

                                <div><p><b>Telefone:</b> {isInfoClienteEmpty ? infoEmpresa.telefone : infoCliente.telefone}</p></div>

                                <div><p><b>Email:</b> {isInfoClienteEmpty ? infoEmpresa.email : infoCliente.email}</p></div>
                                <button className={styles.btnEdit} onClick={handleEdit}><BsPencilSquare /></button>
                            </>
                        }
                    </div>

                    <div className={styles.containerInfoCEP}>
                        {isInfoClienteEmpty ?


                            <div className={styles.containerColeta}>
                                <h2>Adicionar ponto de coleta</h2>
                                <p style={{ color: 'green' }}>{msg}</p>
                                <div className={styles.formulario}>
                                    <label htmlFor="materiaisReciclaveis">Materiais Recicláveis:</label>
                                    <input type="text" id="materiaisReciclaveis" value={materiaisReciclaveis} onChange={e => setMateriaisReciclaveis(e.target.value)} required/>

                                    <label htmlFor="horarioFuncionamento">Horário de Funcionamento:</label>
                                    <input type="text" id="horarioFuncionamento" value={horarioFuncionamento} onChange={e => setHorarioFuncionamento(e.target.value)} required/>

                                    <label htmlFor="endereco">Endereço:</label>
                                    <input type="text" id="endereco" value={endereco1} onChange={e => setEndereco1(e.target.value)} required/>

                                    <button onClick={enviarColeta}>Enviar</button>
                                </div>
                            </div>


                            :
                            endereco && (
                                <div className={styles.containerInfo2}>
                                    <p><b>Rua:</b> {endereco.logradouro}</p>
                                    <p><b>Bairro:</b> {endereco.bairro}</p>
                                    <p><b>Cidade:</b> {endereco.localidade}</p>
                                    <p><b>Estado:</b> {endereco.uf}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Link to="/" className={styles.deslogar}><button onClick={deslogar}>Deslogar</button></Link>
                {infoCliente.email === "admin@admin" ?
                 <Link to="/admin" className={styles.admin}><button>Admin</button></Link> 
                 : 
                 ''}
                
            </div>
            {isInfoClienteEmpty ?
                <ListaPColeta /> : ''}
        </>
    );
};

export default Perfil