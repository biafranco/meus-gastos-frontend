import React, {useState} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import TransactionForms from '../TransactionForms';

const AddTransactionModal = ({ userId, updateTransactionTable }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const onCloseModal = () => {
    setModalOpen(false);
    updateTransactionTable();
  }

  return (
    <Modal
      onClose={() => onCloseModal()}
      onOpen={() => setModalOpen(true)}
      open={isModalOpen}
      trigger={<Button primary style={{ alignSelf: 'flex-end', marginRight: '142px'}}>Cadastrar</Button>}
      header='Cadastrar Gastos'
      content={
        <TransactionForms userId={userId} onCloseModal={onCloseModal}/>
      }
      />
  )
}

export default AddTransactionModal;