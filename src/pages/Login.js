import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';

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
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailValidation.test(target.value);

    // email regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    this.setState({
      email: target.value,
      validEmail,
    });
  }

  handlePassword({ target }) {
    const minPassword = 6;
    const validPassword = target.value.length >= minPassword;

    this.setState({
      password: target.value,
      validPassword,
    });
  }

  handleClick() {
    const { history, login } = this.props;
    const { email } = this.state;

    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, validEmail, validPassword } = this.state;

    return (
      <div>
        <Input
          type="email"
          name="email"
          label="Email: "
          placeholder="email@exemplo.com"
          value={ email }
          onChange={ this.handleEmail }
          data-testid="email-input"
        />
        <Input
          type="password"
          name="password"
          label="Senha: "
          placeholder="senha"
          value={ password }
          onChange={ this.handlePassword }
          data-testid="password-input"
        />
        <button
          type="button"
          onClicke={ this.handleClick }
          disabled={ !validEmail || !validPassword }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
