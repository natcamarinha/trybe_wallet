import React from 'react';
import PropTypes from 'prop-types';
import HeaderForm from './HeaderForm';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <HeaderForm />
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
