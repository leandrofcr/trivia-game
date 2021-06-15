import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      btnEnable: true,
    };
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  verifyLogin() {
    const { name, email } = this.state;
    if (name.length > 0 && email.length > 0) {
      this.setState({ btnEnable: false });
    }
  }

  render() {
    const { btnEnable } = this.state;

    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              data-testid="input-player-name"
              onChange={ ({ target }) => {
                this.setState({ name: target.value }, this.verifyLogin);
              } }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="name"
              data-testid="input-gravatar-email"
              onChange={ ({ target }) => {
                this.setState({ email: target.value }, this.verifyLogin);
              } }
            />
          </label>
          <button
            type="button"
            disabled={ btnEnable }
            data-testid="btn-play"
          >
            Jogar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
