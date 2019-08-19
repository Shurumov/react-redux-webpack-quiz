import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, ResultBlock, Select} from 'components';
import {DIFFICULTY} from 'config/constants';
import { clearResults } from 'store/actions/results.actions';

import './results-page.scss';
import {bindActionCreators} from "redux";

@connect(
  ({resultsState}) => ({
    results: resultsState,
  }),
  (dispatch) => ({
    clearResults: bindActionCreators(clearResults, dispatch)
  })
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
  };

  tryAgain = () => {
    const { history } = this.props;
    history.push('/')
  };

  componentWillUnmount() {
    const { clearResults } = this.props;
    clearResults();
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
        <div className="results-page__button">
          <Button
            type="button"
            addClass="flex-1"
            onClick={this.tryAgain}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }
}