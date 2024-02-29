import React, { Component, useState, useEffect } from 'react'
import { getCategories } from '../../services/category'
import { postTransactions } from '../../services/transactions'
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import {
    FormTextArea,
    FormSelect,
    FormInput,
    FormGroup,
    FormButton,
    Form,
    Message
} from 'semantic-ui-react'

const TransactionForms = ({ userId, onCloseModal }) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState([""]);
    const [quantiaDinheiro, setQuantiaDinheiro] = useState(0);
    const [selectedCategoria, setSelectedCategoria] = useState(0);

    const mountCategories = (response) => {
        setCategorias(response.map(c => ({ key: c.categoriaId, text: c.nome, value: c.categoriaId })))
    }

    const createdTransactionSucess = () => { onCloseModal() }

    const registerNewTransaction = async () => {
        const newTransaction = {
            usuarioId: userId,
            categoriaId: selectedCategoria,
            descricao: descricao,
            quantiaDinheiro: quantiaDinheiro,
            data: data
        }

        postTransactions(newTransaction, createdTransactionSucess, handleMessageError)
    }

    useEffect(() => { getCategories(userId, mountCategories, handleMessageError) }, []);

    const handleMessageError = (response) => {
        setErrorMessage(response?.response?.data?.mensagens[0])
        console.log(errorMessage)
    }

    return (
        < Form primary style={{ padding: '30px' }}>
            <FormGroup widths='equal'>
                <FormInput onChange={newValue => { setQuantiaDinheiro(newValue.target.value) }}
                    fluid label='Valor'
                    placeholder='Valor' />
                <SemanticDatepicker label='Categoria'locale="pt-BR" onChange= {(event, data) => setData(data.value)}/>
                <FormSelect
                    fluid
                    label='Categoria'
                    options={categorias}
                    placeholder='Categoria'
                    onChange={(e, { value }) => { setSelectedCategoria(value) }}
                />
            </FormGroup>
            <FormTextArea onChange={newValue => { setDescricao(newValue.target.value) }}
                label='Descrição' placeholder='Tell us more about your expenses...' />
            <FormButton onClick={() => registerNewTransaction()}>Enviar</FormButton>
            {errorMessage &&
                <Message floating >{errorMessage}</Message>
            }
        </Form >
    )
}

export default TransactionForms