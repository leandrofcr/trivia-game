import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, gravatarEmail } = this.props;
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${hash}` } alt="Avatar do jogador" />
        <p data-testid="header-player-name">{name}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.string,
  gravatarEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
