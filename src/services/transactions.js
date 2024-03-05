import instance from "./instance";

export const getTransactions = (id, callbackSucess, callbackError) =>  
instance.get(`Transacoes/Usuarios/${id}`)
.then((result) => callbackSucess(result.data))
.catch((result) => callbackError(result));

export const postTransactions = (model, callbackSucess,callbackError) =>
instance.post(`Transacoes`, model)
.then((result) => callbackSucess(result.data))
.catch((result) => callbackError(result));

export const putTransactions = (id, model, callbackSucess, callbackError) =>  
instance.put(`Transacoes/${id}`, model)
.then((result) => callbackSucess(result))
.catch((result) => callbackError(result));

export const deleteTransaction = (id,callbackSucess, callbackError) => 
instance.delete(`Transacoes/${id}`)
.then((result) => callbackSucess(result))
.catch((result) => callbackError(result));