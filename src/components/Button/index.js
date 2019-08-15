import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './button.scss'

export class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };
  render() {
    const { children, type, disabled, onClick } = this.props;
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}