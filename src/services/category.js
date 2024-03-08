import instance from "./instance";

export const getCategories = (userId, callbackSucess, callbackError) =>  
instance.get(`Categoria/Usuario/${userId}`)
.then((result) => callbackSucess(result.data))
.catch((result) => callbackError(result));

export const postCategory = (model, callbackSucess,callbackError) =>
instance.post(`Categoria`, model)
.then((result) => callbackSucess(result.data))
.catch((result) => callbackError(result));

export const patchCategory = (id, model, callbackSucess, callbackError) =>  
instance.patch(`Categoria/${id}`, model)
.then((result) => callbackSucess(result))
.catch((result) => callbackError(result));

export const deleteCategory = (id, callbackSucess, callbackError) => 
instance.delete(`Categoria/${id}`)
.then((result) => callbackSucess(result))
.catch((result) => callbackError(result));