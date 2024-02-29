import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/user";
import { WrapperPage } from "../../styles/page.style";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

export const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerMessageError, setRegisterMessageError] = useState("");
  const navigate = useNavigate();

  const saveUser = (response) => {
    localStorage.setItem("user", JSON.stringify({ id: response, name: user }));
  };

  const registerError = (response) => {
    setRegisterMessageError(response?.response?.data?.mensagens[0]);
  };

  const registerNewUser = async () => {
    const requestUser = {
      nickName: user,
      chave: password,
      confirmacaoChave: confirmPassword,
    };

    registerUser(requestUser, saveUser, registerError);
    navigate("/");
  };

  return (
    <WrapperPage>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Icon name="money bill alternate outline" /> Register for an account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={user}
                onChange={(newValue) => {
                  setUser(newValue.target.value);
                  setRegisterMessageError("");
                }}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(newValue) => {
                  setPassword(newValue.target.value);
                  setRegisterMessageError("");
                }}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(newValue) => {
                  setConfirmPassword(newValue.target.value);
                  setRegisterMessageError("");
                }}
              />
              <Button color="teal" fluid size="large" onClick={registerNewUser} to="/">
                Register
              </Button>
            </Segment>
          </Form>
          {registerMessageError && (
            <Message floating>{registerMessageError}</Message>
          )}
          <Message>
            Already have an account? <a href="/login">Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    </WrapperPage>
  );
};