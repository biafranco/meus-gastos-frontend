import React, { useState, useEffect } from "react";
import { WrapperPage } from "../../styles/page.style";
import { PersonalizedMenu } from "../../components/PersonalizedMenu";
import AddTransactionModal from "../../components/AddTransactionModal";
import { getTransactions } from "../../services/transactions";
import ListTransactions from "../../components/ListTransactions";
import {
  Button
} from 'semantic-ui-react'


export const PrivateHome = () => {
  const user = localStorage.getItem("user") ?? "";

  const parsedUser = JSON.parse(user);

  const username = parsedUser?.name;
  const userId = parsedUser?.id;
  const [transactions, setTransactions] = useState([]);
  const [getTransactionsError, setTransactionsError] = useState("");
  const handleMessageError = () => { }

  const updateTransactionTable = () => {
    getTransactions(userId, transactionsList => setTransactions(transactionsList) , handleMessageError);
  }

  useEffect(() => { updateTransactionTable() }, []);

  return (
    <WrapperPage>
      <div style={{ width: "100%" }}>
        <PersonalizedMenu username={username} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AddTransactionModal userId={userId} updateTransactionTable={updateTransactionTable} />
          <ListTransactions userId={userId} transactions={transactions} />
        </div>
      </div>

    </WrapperPage>
  );
};