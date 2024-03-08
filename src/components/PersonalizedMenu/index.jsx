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
        window.location.href = "/";
    }
    return (
        <Menu inverted>
            <Container>
                <Menu.Item as="a" onClick={() => navigate("/home")} header>
                    <Icon name="money bill alternate outline" size="big" />
                    Meus Gastos
                </Menu.Item>
                {username ? (
                    <>
                        <Menu.Menu position="left">
                            <Menu.Item as="a" onClick={() => navigate("/categories")}>Administrar categorias</Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Dropdown item simple text={"Olá, " + username}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as="a" onClick={logoutUser}> Logout </Dropdown.Item>
                                        <Dropdown.Item as="a" onClick={() => navigate("/user")}> Editar usuário </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </>
                ) : (
                    <Menu.Menu position="right">
                        <Menu.Item as="a" onClick={() => window.location.href = "/login"}>Login</Menu.Item>
                    </Menu.Menu>
                )}
            </Container>
        </Menu>
    )
}
