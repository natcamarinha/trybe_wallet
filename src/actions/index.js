export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SET_EXPENSE = 'SET_EXPENSE';

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const setExpense = (data, payload) => ({
  type: SET_EXPENSE,
  payload: { ...payload, exchangeRates: data },
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  const currencies = Object.keys(data);
  dispatch(getCurrency(currencies));
};

export const setExpensesThunk = (payload) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  dispatch(setExpense(data, payload));
};
