import { WrapperPage } from "../../styles/page.style";
import React, { useEffect, useState } from "react";
import { getCategories, postCategory, patchCategory, deleteCategory } from "../../services/category";
import { PersonalizedMenu } from "../../components/PersonalizedMenu";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Form,
  FormField,
  Table,
  Modal,
  FormInput,
  FormButton,
  FormGroup,
  Icon,
  Message
} from 'semantic-ui-react';

export const EditCategories = () => {
  const user = localStorage.getItem("user") ?? "";

  const parsedUser = JSON.parse(user);
  const username = parsedUser?.name;

  const [errorMessage, setErrorMessage] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('')
  const [rowCategoryName, setRowCategoryName] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    getCategories(parsedUser.id, setCategorias, handleMessageError)
  }, [])

  const handleRowClick = (c) => {
    setSelectedCategoryId(c.categoriaId);
    setRowCategoryName(c.nome);
    setIsModalOpen(true);
  }

  const handleMessageError = (response) => {
    setErrorMessage(response?.response?.data?.mensagens[0]);
  };

  const createNewCategory = (e) => {
    e.preventDefault();
    const newCategoryPayload = {
      usuarioId: parsedUser.id,
      nome: newCategoryName
    };
    postCategory(newCategoryPayload, () => { getCategories(parsedUser.id, setCategorias, handleMessageError) }, handleMessageError)
    setNewCategoryName('');
    setErrorMessage('');
  };

  const deleteCategoryButton = () => {
    getCategories(parsedUser.id, setCategorias, handleMessageError);
    console.log(errorMessage)
    setIsModalOpen(false);
  }

  const editCategoryButton = () => {
    const editCategoryPayload = {
      usuarioId: parsedUser.id,
      nome: rowCategoryName
    }
    console.log(editCategoryPayload)
    patchCategory(selectedCategoryId, editCategoryPayload, () => { getCategories(parsedUser.id, setCategorias, handleMessageError) }, handleMessageError);
    setIsModalOpen(false);
  }

  const onCloseModal = () => {
    setIsModalOpen(false);
    setErrorMessage('');
  };

  return (
    <WrapperPage style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: "100%", backgroundColor: "red" }}>
        <PersonalizedMenu username={username} />
      </div>

      <Form style={{ marginTop: '25px' }} onSubmit={createNewCategory}>
        <FormField style={{ display: 'flex', alignItems: 'center' }}>
          <label>Criar nova categoria: </label>
          <FormInput
            style={{ padding: '15px' }}
            value={newCategoryName}
            onChange={(e) => {
              setNewCategoryName(e.target.value);
              setErrorMessage('');
            }}
          />
        </FormField>
        {errorMessage && <Message floating>{errorMessage}</Message>}
      </Form>

      <Table celled striped style={{ maxWidth: '80%' }}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Suas categorias</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            categorias.map((c) => (
              <TableRow key={c.categoriaId} onClick={() => handleRowClick(c)}>
                <TableCell>{c.nome}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

      <Modal
        style={{ width: '50%' }}
        onClose={onCloseModal}
        open={isModalOpen}
        size='large'
      >
        <Modal.Header>Editar</Modal.Header>
        <Modal.Content>
          <Form>
            <FormField>
              <label>Nome da Categoria: </label>
              <FormInput
                value={rowCategoryName}
                onChange={(e) => setRowCategoryName(e.target.value)}
              />
            </FormField>
            {errorMessage && <Message floating>{errorMessage}</Message>}
            <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
              <FormButton onClick={editCategoryButton} >Editar</FormButton>
              <FormButton
                onClick={() => deleteCategory(selectedCategoryId, deleteCategoryButton, handleMessageError)}>
                <Icon name="trash" size="large" style={{ marginRight: '0' }} /> Excluir
              </FormButton>
            </FormGroup>
          </Form>
        </Modal.Content>
      </Modal>


    </WrapperPage>
  );
};