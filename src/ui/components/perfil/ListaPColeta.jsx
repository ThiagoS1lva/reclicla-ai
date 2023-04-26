import styles from '../../styles/ListaPColeta.module.css'
import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../contexts/AuthContext'
import { BsPencilSquare } from 'react-icons/bs';
import { CgRemoveR } from 'react-icons/cg';

function ListaPColeta() {
    const [pontosDeColeta, setPontosDeColeta] = useState([]);
    const { infoEmpresa } = useContext(Context);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [endereco, setEndereco] = useState('');
    const [horarioFuncionamento, setHorarioFuncionamento] = useState('');
    const [materiaisReciclaveis, setMateriaisReciclaveis] = useState('');
    const [editing, setEditing] = useState(false);

    const editando = (ponto) => {
        setEditing(true);
        setItemSelecionado(ponto);
        setEndereco(ponto.endereco);
        setHorarioFuncionamento(ponto.horario_funcionamento);
        setMateriaisReciclaveis(ponto.materiais_reciclaveis);
    }

    //Editando
    const putPontoDeColeta = async (id, data) => {
        const response = await fetch(`https://reclicla.onrender.com/Coleta/id/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    };
    const salvar = async () => {
        const data = {
            materiais_reciclaveis: materiaisReciclaveis,
            horario_funcionamento: horarioFuncionamento,
            endereco: endereco,
        };

        await putPontoDeColeta(itemSelecionado.ID, data);
        setItemSelecionado(null);
    };

    useEffect(() => {
        fetch(`https://reclicla.onrender.com/Coleta/cnpj/${(infoEmpresa.cnpj).toString()}`)
            .then(res => res.json())
            .then(data => setPontosDeColeta(data))
            .catch(error => console.error(error));
    }, [pontosDeColeta]);

    //Remover
    const removerPonto = async (id) => {
        console.log(id)
        try {
            const response = await fetch(`https://reclicla.onrender.com/Coleta/id/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log('Ponto de coleta removido com sucesso!');
            } else {
                console.log('Erro ao remover o ponto de coleta');
            }
        } catch (error) {
            console.error(`Erro ao remover o ponto de coleta: ${error.message}`);
        }
    }
    return (
        <div className={styles.container}>
            <h2>Meus pontos de coleta</h2>
            <div className={styles.containerLista}>
                <ul>
                    {pontosDeColeta.map(ponto => (
                        <React.Fragment key={ponto.ID}>
                            {itemSelecionado && itemSelecionado.ID === ponto.ID ? (
                                <form className={styles.formulario} onSubmit={() => salvar(ponto.ID)}>
                                    <label>Endereço: </label>
                                    <input type="text" value={endereco} onChange={event => setEndereco(event.target.value)} />
                                    <label>Horario: </label>
                                    <input type="text" value={horarioFuncionamento} onChange={event => setHorarioFuncionamento(event.target.value)} />
                                    <label>Materiais: </label>
                                    <input type="text" value={materiaisReciclaveis} onChange={event => setMateriaisReciclaveis(event.target.value)} />
                                    <div className={styles.btns}>
                                    <button type="submit">Salvar</button>
                                    <button type='cancel'>Cancelar</button>
                                    </div>
                                </form>

                            ) : (
                                <li key={ponto.ID}>
                                    <p><b>Endereço:</b> {ponto.endereco}</p>
                                    <p><b>Horário de funcionamento:</b> {ponto.horario_funcionamento}</p>
                                    <p><b>Materiais recicláveis:</b> {ponto.materiais_reciclaveis}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <button onClick={() => editando(ponto)}><BsPencilSquare /></button>
                                        <button onClick={() => removerPonto(ponto.ID)}><CgRemoveR /></button>
                                    </div>
                                </li>
                            )}
                        </React.Fragment>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default ListaPColeta;