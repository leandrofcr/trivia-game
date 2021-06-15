import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getPLayerInfo, getTokenAPI } from '../action';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gravatarEmail: '',
      btnEnable: true,
      login: false,
    };
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  componentWillUnmount() {
    const { savePlayerInfo } = this.props;
    const { name, gravatarEmail } = this.state;
    savePlayerInfo({ name, gravatarEmail });
  }

  verifyLogin() {
    const { name, gravatarEmail } = this.state;
    if (name.length > 0 && gravatarEmail.length > 0) {
      this.setState({ btnEnable: false });
    }
  }

  redirectToGame() {
    this.setState({ login: true });
  }

  render() {
    const { btnEnable, login } = this.state;
    const { getTokenData } = this.props;
    if (login) {
      return <Redirect to="/trivia" />;
    }
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
                this.setState({ gravatarEmail: target.value }, this.verifyLogin);
              } }
            />
          </label>

          <button
            type="button"
            disabled={ btnEnable }
            data-testid="btn-play"
            onClick={ () => {
              getTokenData();
              this.redirectToGame();
            } }
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
  savePlayerInfo: (value) => dispatch(getPLayerInfo(value)),
});

Login.propTypes = {
  getTokenData: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
