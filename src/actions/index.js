import getCurrencies from '../services/currencyAPI';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_CURRENCY = 'GET_CURRENCY';

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  const payload = Object.keys(currencies).filter((currency) => currency !== 'USDT');
  dispatch(getCurrency(payload));
};
