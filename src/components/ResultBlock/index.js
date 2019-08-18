import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import './result-block.scss'

export class ResultBlock extends PureComponent {
  static propTypes = {
    questionTitle: PropTypes.string,
    userAnswer: PropTypes.string,
    correctAnswer: PropTypes.string,
  };

  render() {
    const { questionTitle, userAnswer, correctAnswer } = this.props;
    return (
      <div className="result-block">
        <h3>
          {questionTitle}
        </h3>
        { userAnswer === correctAnswer ? (
          <div className="result-block__correct">
            {userAnswer}
          </div>
        ) : (
          <Fragment>
            <div className="result-block__incorrect">
              You answer: <br/>
              {userAnswer}
            </div>
            <div className="result-block__real">
              Correct answer: <br/>
              {correctAnswer}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}