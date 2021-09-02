import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { loginSuccess } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail({ target }) {
    const { email } = this.state;
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    // email regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    this.setState({
      email: target.value,
      validEmail: emailValidation.test(email),
    });
  }

  handlePassword({ target }) {
    const minPassword = 6;

    this.setState({
      password: target.value,
      validPassword: target.value.length >= minPassword,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { history, login } = this.props;

    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, validEmail, validPassword } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <Input
          type="email"
          name="email"
          id="email"
          label="Email: "
          placeholder="email@exemplo.com"
          testId="email-input"
          value={ email }
          onChange={ this.handleEmail }
        />

        <Input
          type="password"
          name="password"
          id="name"
          label="Senha: "
          placeholder="senha"
          testId="password-input"
          value={ password }
          onChange={ this.handlePassword }
        />

        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ validEmail || !validPassword }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(loginSuccess(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
