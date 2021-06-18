import React, { Component } from 'react';
import { Redirect } from 'react-router';
import LoginForms from '../components/LoginForms';
import '../login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirectSettings: false,
    };
  }

  render() {
    const { redirectSettings } = this.state;
    if (redirectSettings) {
      return <Redirect to="/settings" />;
    }
    return (
      <section className="login-container">
        <LoginForms />
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => this.setState({ redirectSettings: true }) }
        >
          Configurações
        </button>
      </section>

    );
  }
}

export default Login;
