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


// export const setCurrency = (payload) => ({
//   type: SET_CURRENCY,
//   payload,
// });

// export const getExchangeRatesThunk = (payload) => async (dispatch) => {
//   const currencies = await getCurrencies();
//   payload.exchangeRates = currencies;
//   dispatch(setExpense(payload));
// };

// export const getCurrenciesThunk = () => async (dispatch) => {
//   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const data = await response.json();
//   delete data.USDT;
//   console.log(data);
//   dispatch(getCurrency(data));
// };

// export const getCurrenciesThunk = () => async (dispatch) => {
//   dispatch(fetchAPI());

//   const currencies = await getCurrencies();

//   dispatch(getCurrency(currencies));
// }


// export const getCurrenciesThunk = () => async (dispatch) => {
//   const currencies = await getCurrencies();
//   const payload = Object.keys(currencies)
//     .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');
//   dispatch(getCurrency(payload));
//   // console.log(currencies);
//   // console.log(payload);
// };


// export const setExpensesThunk = (expense) => async (dispatch) => {
//   const expenses = await getExchangeRates();
//   payload.exchangeRates = expenses;
//   dispatch(setExpense(payload));
//   console.log(payload.exchangeRates);
// };

// dispatch(fetchAPI());

// const exchangeRates = await getExchangeRates();

// dispatch(setExpense({ ...expense, exchangeRates }));