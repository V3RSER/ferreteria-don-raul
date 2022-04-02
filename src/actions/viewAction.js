export const LOADING = "view/LOADING";
export const LOADED = "view/LOADED";

export const loading = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const loaded = () => async (dispatch) => {
  dispatch({
    type: LOADED,
  });
};
