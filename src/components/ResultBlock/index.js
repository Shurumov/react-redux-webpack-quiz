import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { decoder } from 'utils/decode';


import './result-block.scss'

export class ResultBlock extends PureComponent {
  static propTypes = {
    questionTitle: PropTypes.string,
    userAnswer: PropTypes.string,
    correctAnswer: PropTypes.string,
    addClass: PropTypes.string,
  };

  render() {
    const { questionTitle, userAnswer, correctAnswer, addClass } = this.props;
    return (
      <div className={`result-block ${addClass}`}>
        <h3>
          {decoder(questionTitle)}
        </h3>
        { userAnswer === correctAnswer ? (
          <div className="result-block__answer result-block__correct">
            {decoder(userAnswer)}
          </div>
        ) : (
          <Fragment>
            <div className="result-block__answer result-block__incorrect">
              You answer: <br/>
              {decoder(userAnswer)}
            </div>
            <div className=" result-block__answer result-block__real">
              Correct answer: <br/>
              {decoder(correctAnswer)}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}