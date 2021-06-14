import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTokenAPI } from '../action';

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
    const { getTokenData } = this.props;

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
            onClick={ () => getTokenData() }
          >
            Jogar
          </button>

        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTokenData: () => dispatch(getTokenAPI()),
});

Login.propTypes = {
  getTokenData: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
