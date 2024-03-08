import { WrapperPage } from "../../styles/page.style";
import React, { useEffect, useState } from "react";
import { PersonalizedMenu } from "../../components/PersonalizedMenu";
import {
    Form,
    FormField,
    FormInput,
    FormButton,
    FormGroup,
    Message
} from 'semantic-ui-react';
import { authUser, patchUser } from "../../services/user";

export const EditUser = () => {
    const user = localStorage.getItem("user") ?? "";

    const parsedUser = JSON.parse(user);
    const username = parsedUser?.name;
    const userId = parsedUser?.id;  

    const [errorMessage, setErrorMessage] = useState('');
    const [newUsername, setNewUsername] = useState(parsedUser.name);
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');


    const logoutUser = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    }

    const handleMessageError = (response) => {
        setErrorMessage(response?.response?.data?.mensagens[0]);
    };

    const handleUpdateUser = () => {
        const authUserPayload = {
            nickname: username,
            chave: oldPassword
        };
        authUser(authUserPayload, updateUser, ()=>{setErrorMessage('Senha antiga está incorreta')});
    };

    const updateUser = () => {
        const updatedUserPayload = {
            nickname: newUsername,
            chave: newPassword
        };
        patchUser(userId, updatedUserPayload, logoutUser, handleMessageError)
    }

    return (
        <WrapperPage>
            <PersonalizedMenu username={username} />

            <Form style={{
                marginTop: '25px', display: 'flex', flexDirection: 'column', alignContent: 'center',
                justifyContent: 'space-evenly', alignItems: 'center'
            }}>
                <FormField style={{ display: 'flex', alignItems: 'center' }}>
                    <label>Novo nome de usuário: </label>
                    <FormInput
                        style={{ padding: '15px' }}
                        onChange={(e) => {
                            setNewUsername(e.target.value);
                            setErrorMessage('');
                        }}
                    />
                </FormField>
                <FormField style={{ display: 'flex', alignItems: 'center' }}>                    
                <label>Senha antiga: </label>
                    <FormInput style={{ padding: '15px' }} type="password" onChange={(e) => {
                        setOldPassword(e.target.value);
                        setErrorMessage('')
                    }}
                    />
                    </FormField>
                <FormField style={{ display: 'flex', alignItems: 'center' }}>
                    <label>Nova senha: </label>
                    <FormInput style={{ padding: '15px' }} type="password" onChange={(e) => {
                        setNewPassword(e.target.value);
                        setErrorMessage('')
                    }}
                    />
                </FormField>
                {errorMessage && <Message floating>{errorMessage}</Message>}
                <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                    <FormButton  onClick={handleUpdateUser} type="submit">Salvar</FormButton>
                </FormGroup>
            </Form>

        </WrapperPage>
    );
};