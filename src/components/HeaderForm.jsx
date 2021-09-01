import React from 'react';
import Input from './Input';

class HeaderForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          type="number"
          name="value"
          id="value"
          label="Valor"
          placeholder="0"
        />

        <Input
          type="text"
          name="description"
          id="description"
          label="Descrição"
          placeholder="descrição"
        />

        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option>API</option>
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default HeaderForm;
