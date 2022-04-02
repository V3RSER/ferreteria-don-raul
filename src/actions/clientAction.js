import clientServices from "../services/streaming/clientService";

export const ADD_CLIENT = "client/ADD_CLIENT";
export const SET_CLIENTS = "client/SET_CLIENTS";

export const add_client = (client) => async (dispatch) => {
  try {
    await clientServices.addClient(client).then(function (response) {
      dispatch({
        type: ADD_CLIENT,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const set_clients = () => async (dispatch) => {
  try {
    await clientServices.getClients().then(function (response) {
      dispatch({
        type: SET_CLIENTS,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
