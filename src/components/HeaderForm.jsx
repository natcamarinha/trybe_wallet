import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import { getCurrenciesThunk, setExpensesThunk } from '../actions';

class HeaderForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { getExpenses } = this.props;
    getExpenses(this.state);
  }

  renderMethod(method) {
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select
          name="method"
          id="method"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag(tag) {
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" onChange={ this.handleChange } value={ tag }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset>
        <Input
          type="number"
          name="value"
          id="value"
          label="Valor"
          placeholder="0"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          id="description"
          label="Descrição"
          placeholder="descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            { currencies.map((curr) => (
              <option key={ curr } value={ curr }>{ curr }</option>)) }
          </select>
        </label>
        { this.renderMethod(method) }
        { this.renderTag(tag) }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </fieldset>
    );
  }
} 

HeaderForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  getExpenses: (state) => dispatch(setExpensesThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);
