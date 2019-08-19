import React from 'react';
import PropTypes from 'prop-types';

import './loader.scss';

export class Loader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    isShow: PropTypes.bool,
    transparent: PropTypes.bool,
    centeredLoader: PropTypes.bool,
    className: PropTypes.string,
    spinnerStyles: PropTypes.object,
  };

  static defaultProps = {
    isShow: false,
    transparent: false,
    centeredLoader: false,
    className: '',
    spinnerStyles: {},
  };

  render() {
    const { isShow, transparent, className, spinnerStyles, centeredLoader } = this.props;

    return (
      <div className={`loader ${className} ${isShow ? '_show' : ''} ${transparent ? '_transparent' : ''}`}>
        {isShow && (
          <div
            style={spinnerStyles}
            className={`loader__spinner ${centeredLoader ? '_centered' : ''}`}>
            <img className={`loader__img`} src="/assets/loader.svg" alt="loader" />
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
