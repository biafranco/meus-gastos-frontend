import React, { useState } from "react";
import {authUser} from "../../services/user"
import { WrapperPage } from "../../styles/page.style";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessageError, setLoginMessageError] = useState("");
  const navigate = useNavigate();

  const saveUser = (response) => {
    localStorage.setItem("user", JSON.stringify({id: response, name: user}));
    navigate("/");
  } 
  const loginError = (response) => {setLoginMessageError(response?.response?.data?.mensagens[0])}

  const loginUser = async () => {
    const requestUser =       
    {
      nickName: user,
      chave: password
    }
    authUser(requestUser, saveUser, loginError)
  }
  return (
    <WrapperPage>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Icon name="money bill alternate outline" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={user}
                onChange={newValue => {setUser(newValue.target.value) 
                  setLoginMessageError("")}}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password" value={password}
                onChange={newValue => {setPassword(newValue.target.value)
                  setLoginMessageError("")}}
              />
              <Button color="teal" fluid size="large" onClick={loginUser} to="/">
                Login
              </Button>
            </Segment>
          </Form>
          { loginMessageError &&
          <Message floating >{loginMessageError}</Message>
          }
        <Message>
          New to us? <a href="/register">Sign Up</a>
        </Message>
        </Grid.Column>
      </Grid>
    </WrapperPage>
  );
};
