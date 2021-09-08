import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  sumExpense() {
    const { expenses } = this.props;

    return expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const convertValue = value * exchangeRates[currency].ask;

      return acc + convertValue;
    }, 0);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">
          <p>{ this.sumExpense().toFixed(2) }</p>
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
