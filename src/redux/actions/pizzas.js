import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (sortBy, category) => async (dispatch) => {
  dispatch(setLoaded(false));
  await axios
    .get(`/pizzas`, {
      params: {
        category: category,
        _sort: sortBy,
        _order: "asc",
      },
    })
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
