import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">Despesa Total</p>
        <p data-testid="header-currency-field">Câmbio</p>
      </header>
    );
  }
}

// const mapStateToProps = (state) => ({
//   email: state.userReducer.email,
// });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Wallet;
