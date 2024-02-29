import React, { useEffect, useState } from "react";
import {CurrencyFormat} from 'react-currency-format';
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Icon,
    Table,
    Button
} from 'semantic-ui-react';

const ListTransactions = ({ userId, transactions }) => {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        return date.toLocaleDateString();
    };

    function formatCurrency(value) {
        const digitsOnly = value.replace(/[^0-9]/g, '');
            const withCommas = Number(digitsOnly).toLocaleString();
            return `R$${withCommas}`;
      }

    const currentMonthTransactions = transactions.filter((t) => {
        const transactionDate = new Date(t.data);
        const currentDate = new Date();
        return transactionDate.getMonth() === currentDate.getMonth();
    });

    return (
        <Table celled striped style={{ maxWidth: '80%' }}>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Descrição</TableHeaderCell>
                    <TableHeaderCell>Categoria</TableHeaderCell>
                    <TableHeaderCell>Quantia</TableHeaderCell>
                    <TableHeaderCell>Data</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    currentMonthTransactions.map((t) => (
                        <TableRow>
                            <TableCell>{t.descricao}</TableCell>
                            <TableCell>{t.categoriaNome}</TableCell>
                            <TableCell> {formatCurrency(t.quantiaDinheiro.toString())}
                            </TableCell>
                            <TableCell>{formatDate(t.data)}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default ListTransactions;