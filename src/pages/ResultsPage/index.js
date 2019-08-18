import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ResultBlock, Select} from 'components';
import {DIFFICULTY} from 'config/constants';

import './results-page.scss';

@connect(
  ({resultsState}) => ({
    results: resultsState,
  }),
  null
)
export default class ResultsPage extends Component {
  static propTypes = {
    results: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      difficulty: ''
    };
  }

  handleChangeDifficulty = value => {
    this.setState({
      difficulty: value
    })
  }

  render() {
    const {results = []} = this.props;
    const { difficulty } = this.state;
    const displayedAnswers = results.filter(item => ( difficulty === '' ? item : item.difficulty === difficulty));
    return (
      <div className="results-page">
        <Select
          title="difficulty"
          options={DIFFICULTY}
          onChange={this.handleChangeDifficulty}
        />
        {displayedAnswers.map(item => (
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