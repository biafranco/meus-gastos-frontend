import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuButtons, ContainerButtons } from "./index.style";
import {
    Container,
    Dropdown,
    Icon,
    Menu
} from "semantic-ui-react";

export const PersonalizedMenu = ({ username }) => {

    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return <Menu inverted>
        <Container>
            <Menu.Item as="a" header>
                <Icon name="money bill alternate outline" size="big" />
                Meus Gastos
            </Menu.Item>
            <MenuButtons>
                <ContainerButtons display={true}>
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Item>Administrar categorias</Menu.Item>
                    <Menu.Item>Histórico de transações</Menu.Item>
                </ContainerButtons>
                <ContainerButtons display={true}>
                    <Dropdown item simple text={"Olá, " + username}>
                        <Dropdown.Menu>
                            <Dropdown.Item as="a" onClick={logoutUser}> Logout </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ContainerButtons>
                 <ContainerButtons display={true}>          
                    <Menu.Item>Login</Menu.Item>
                </ContainerButtons>
            </MenuButtons>
        </Container>
    </Menu>
}

