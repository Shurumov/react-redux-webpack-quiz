import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './button.scss'

export class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    addClass: PropTypes.string,
  };
  render() {
    const { children, type, disabled, onClick, addClass } = this.props;
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={addClass}
      >
        {children}
      </button>
    )
  }
}