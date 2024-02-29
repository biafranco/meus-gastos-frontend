import instance from "./instance";

export const authUser = (model, callbackSucess, callbackError) => { 
    instance.post('Usuario/Autenticar', model)
    .then((result) => callbackSucess(result.data))
    .catch((result) => callbackError(result));
 } 

 export const registerUser = (model, callbackSucess, callbackError) => { 
    instance.post('Usuario', model)
    .then((result) => callbackSucess(result.data))
    .catch((result) => callbackError(result));
 } 
