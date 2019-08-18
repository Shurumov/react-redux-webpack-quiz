import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ResultBlock} from 'components';

import './results-page.scss';

@connect(({resultsState}) => ({
  results: resultsState
}), null)
export default class ResultsPage extends Component {
  static propTypes = {
    results: PropTypes.array,
  };

  render() {
    const { results } = this.props;
    return (
      <div className="results-page">
        {results.map(item => (
          <ResultBlock
            key={item.question}
            questionTitle={item.question}
            userAnswer={item['user_answer']}
            correctAnswer={item['correct_answer']}
          />
        ))}
      </div>
    );
  }
}