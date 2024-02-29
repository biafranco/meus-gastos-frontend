import instance from "./instance";

export const getCategories = (userId, callbackSucess, callbackError) =>  
instance.get(`Categoria/Usuario/${userId}`)
.then((result) => callbackSucess(result.data))
.catch((result) => callbackError(result));
