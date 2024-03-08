import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/category';
import { postTransactions, putTransactions, deleteTransaction  } from '../../services/transactions';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import {
    FormTextArea,
    FormSelect,
    FormInput,
    FormGroup,
    FormButton,
    Form,
    Message,
    Icon
} from 'semantic-ui-react';

const NewTransactionsForms = ({ userId, onCloseModal, editTransacao }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantiaDinheiro, setQuantiaDinheiro] = useState(0);
    const [selectedCategoria, setSelectedCategoria] = useState(0);

    useEffect(() => {
        if (editTransacao) {
            setDescricao(editTransacao.descricao);
            setQuantiaDinheiro(editTransacao.quantiaDinheiro);
            setSelectedCategoria(editTransacao.categoriaId);
            setData(new Date(editTransacao.data));
            console.log(editTransacao)
        }
    }, [editTransacao]);

    const mountCategories = (response) => {
        setCategorias(
            response.map((c) => ({
                key: c.categoriaId,
                text: c.nome,
                value: c.categoriaId,
            }))
        );
    };

    const createdTransactionSucess = () => {
        onCloseModal();
    };

    const registerNewTransaction = async () => {

        if (editTransacao) {
            const editTransactionPayload = {
                categoriaId: selectedCategoria,
                descricao: descricao,
                quantiaDinheiro: quantiaDinheiro,
                data: data,
            };
            putTransactions(editTransacao.transacaoId, editTransactionPayload, createdTransactionSucess, handleMessageError);
          } else {
            const newTransaction = {
                usuarioId: userId,
                categoriaId: selectedCategoria,
                descricao: descricao,
                quantiaDinheiro: quantiaDinheiro,
                data: data,
            };
            postTransactions(newTransaction, createdTransactionSucess, handleMessageError);
          }
    };

    const deleteTransactionButton = async (id) => (
        deleteTransaction(editTransacao.transacaoId, createdTransactionSucess, handleMessageError)
    )

    useEffect(() => {
        getCategories(userId, mountCategories, teste);
    }, []);
    
    const teste =  () => console.log('here');
    const handleMessageError = (response) => {
        setErrorMessage(response?.response?.data?.mensagens[0]);
        console.log(errorMessage);
    };

    return (
        <Form primary style={{ padding: '30px' }}>
            <FormGroup widths='equal'>
                <FormInput
                    onChange={(newValue) => {
                        setQuantiaDinheiro(newValue.target.value);
                    }}
                    fluid
                    label='Valor'
                    placeholder='Valor'
                    value={quantiaDinheiro}
                />
                <SemanticDatepicker
                    label='Data'
                    locale='pt-BR'
                    onChange={(event, data) => setData(data.value)}
                    value={data}
                />
                <FormSelect
                    fluid
                    label='Categoria'
                    options={categorias}
                    placeholder='Categoria'
                    onChange={(e, { value }) => {
                        setSelectedCategoria(value);
                    }}
                    value={selectedCategoria}
                />
            </FormGroup>
            <FormTextArea
                value={descricao}
                onChange={(newValue) => {
                    setDescricao(newValue.target.value);
                }}
                label='Descrição'
                placeholder='Conte-nos mais sobre seus gastos...'
            />
           <FormGroup style={{ display: "flex", justifyContent: "space-between"}}>
            <FormButton onClick={() => registerNewTransaction()}>Enviar</FormButton>
            {editTransacao && <FormButton onClick={() => deleteTransactionButton()}>
            <Icon name="trash" size="large" style={{ marginRight: '0' }} /> Excluir
        </FormButton>}
        </FormGroup>
            {errorMessage && <Message floating>{errorMessage}</Message>}
        </Form>
    );
};

export default NewTransactionsForms;