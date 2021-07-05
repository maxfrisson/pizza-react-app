import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = () => async (dispatch) => {
  dispatch(setLoaded(false));
  await axios.get("http://localhost:3001/pizzas").then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
