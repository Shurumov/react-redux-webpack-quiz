import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getQuestions} from "store/actions/questions.actions";
import {setResults} from "store/actions/results.actions";
import {Radio, Button} from "components";
import { ROUTES } from 'config/constants';

import './questions-page.scss'

@connect(({questionsState}) => ({
    questions: questionsState.questions.data,
  }),
  (dispatch) => ({
    getQuestions: bindActionCreators(getQuestions, dispatch),
    setResults: bindActionCreators(setResults, dispatch)
  })
)
export default class QuestionPage extends Component {
  static propTypes = {
    getQuestions: PropTypes.func,
    setResults: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      answers: []
    };
  }

  setValue = (value) => {
    const newAnswers = this.state.answers;
    newAnswers[this.state.step] = value;
    this.setState(state => ({
      answers: newAnswers,
    }))
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    })
  };

  prevStep = () => {
    this.setState({
      step: this.state.step - 1,
    })
  };

  setResults = () => {
    const { setResults, history = {}, questions =[] } = this.props;
    const { answers = [] } = this.state;
    const userResults = questions.map((item, index) => {
      item['user_answer'] = answers[index];
      return item;
    });
    setResults(userResults);
    history.push(ROUTES.RESULTS)
  };

  componentDidMount() {
    const {getQuestions} = this.props;
    getQuestions()
  }

  render() {
    const {questions = []} = this.props;
    const {step, answers} = this.state;
    const answersList = (((questions || [])[step] || [])['incorrect_answers'] || []).concat((((questions || [])[step] || [])['correct_answer'] || ''));
    return (
      <div className="questions-page">
        <Radio
          question={((questions || [])[step] || {}).question}
          name={((questions || [])[step] || {}).question}
          answers={answersList}
          selectedAnswer={answers[step]}
          onChange={this.setValue}
        />
        <div className="questions-page__buttons">
          {step === questions.length - 1 ? (
            <Button addClass="button flex-1" onClick={this.setResults}>
              Show results
            </Button>
          ) : (
            <Fragment>
              { step > 0 &&  (
                <Button
                  type="button"
                  onClick={this.prevStep}
                  disabled={step === 0}
                >
                  Back
                </Button>
              )}

              <Button
                addClass={step === 0 ? "flex-1" : ''}
                onClick={this.nextStep}
                type="button"
                disabled={answers[step] === undefined}
              >
                Next
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}