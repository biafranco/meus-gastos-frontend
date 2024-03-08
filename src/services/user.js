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

export const patchUser = (id, model, callbackSucess, callbackError) => {
   instance.patch(`Usuario/${id}`, model)
      .then((result) => callbackSucess(result))
      .catch((result) => callbackError(result));
}
