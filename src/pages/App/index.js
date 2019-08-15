import React from 'react';
import PropTypes from 'prop-types';


export class App extends React.PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        return (
            <div style={{ minHeight: '100%' }}>
                {this.props.children}
            </div>
        );
    }
}
