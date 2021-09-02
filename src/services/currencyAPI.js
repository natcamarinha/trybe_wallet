const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(CURRENCY_API);
  const currencies = response.json();
  return currencies;
};

export default getCurrencies;
