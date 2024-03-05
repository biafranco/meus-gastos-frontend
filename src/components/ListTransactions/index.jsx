import React, { useEffect, useState } from "react";
import {CurrencyFormat} from 'react-currency-format';
import NewTransactionModal from "../NewTransactionModal";
import NewTransactionsForms from "../NewTransactionForms";
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Icon,
    Table,
    Modal
} from 'semantic-ui-react';

const ListTransactions = ({ userId, transactions, updateTransactionTable }) => {

    const [selectedId, setSelectedId] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleRowClick = (transactionId) => {
        setSelectedId(transactionId);
        setModalOpen(true);
    }

    const onCloseModal = () => {
        setSelectedId(null);
        setModalOpen(false);
        updateTransactionTable();
    }

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
        <>
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
                    transactions.map((t) => (
                        <TableRow key={t.transacaoId} onClick={() => handleRowClick(t.transacaoId)}>
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

        <Modal
            onClose={() => onCloseModal()}
            open={isModalOpen}
            size='large'
        >
            <Modal.Header>Editar Gastos</Modal.Header>
            <Modal.Content>
            <NewTransactionsForms userId={userId} onCloseModal={onCloseModal} editTransacao={transactions.filter((t) => t.transacaoId === selectedId).shift()} />
            </Modal.Content>
        </Modal>
    </>
        
    )
}

export default ListTransactions;