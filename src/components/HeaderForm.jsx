import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { getCurrenciesThunk } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
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

  form() {
    const { value, description, currency, payment, tag } = this.state;
    const { currencies } = this.props;
    return (
      <>
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
        <Select
          label="Moeda"
          id="currency"
          items={ currencies }
          onChange={ this.handleChange }
          value={ currency }
        />
        <Select
          label="Método de pagamento"
          id="payment"
          items={ paymentMethods }
          onChange={ this.handleChange }
          value={ payment }
        />
        <Select
          label="Tag"
          id="tag"
          items={ tags }
          onChange={ this.handleChange }
          value={ tag }
        />
      </>
    );
  }

  render() {
    return (
      <div>
        { this.form() }
      </div>
    );
  }
}

HeaderForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);
