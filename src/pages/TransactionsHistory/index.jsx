import { WrapperPage } from "../../styles/page.style";
import { PersonalizedMenu } from "../../components/PersonalizedMenu"; const user = localStorage.getItem("user") ?? "";

import React from "react";

const TransactionsHistory = () => {

    const user = localStorage.getItem("user") ?? "";

    const parsedUser = JSON.parse(user);
    const username = parsedUser?.name;
    
    return (
        <WrapperPage>
            <div style={{ width: "100%", backgroundColor: "red" }}>
                <PersonalizedMenu username={username} />
            </div>
        </WrapperPage>
    );
};

export default TransactionsHistory;