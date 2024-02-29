import React, { Fragment } from "react";
import { WrapperPage } from "../../styles/page.style";
import {PersonalizedMenu} from "../../components/PersonalizedMenu"

export const PublicHome = () => {
    const user = localStorage.getItem("user") ?? "";
    const username =  JSON.parse(user)?.name;

    return (
      <WrapperPage>
        <div style={{ width: "100%", backgroundColor: "red" }}>
          <PersonalizedMenu username={username} />
        </div>
      </WrapperPage>
    );
};
