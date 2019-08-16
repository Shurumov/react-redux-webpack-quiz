import React from 'react';
import PropTypes from 'prop-types';
import './app.scss'

export class App extends React.PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        return (
            <div className="app" style={{ minHeight: '100%' }}>
                {this.props.children}
            </div>
        );
    }
}
