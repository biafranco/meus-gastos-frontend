import React from "react";
import { WrapperPage } from "../../styles/page.style";
import { MessageHeader, Message, Icon } from "semantic-ui-react";

export const ErrorPage = () => {
  return (
    <WrapperPage
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "25rem" }}>
        <Message negative size="huge">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <MessageHeader>Algo deu errado</MessageHeader>
            <Icon circular name="close" />
          </div>
          <p>Por favor, contate o suporte</p>
        </Message>
      </div>
    </WrapperPage>
  );
};
