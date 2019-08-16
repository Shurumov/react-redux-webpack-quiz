import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getQuestions} from "store/actions/questions.actions";
import {Radio, Button} from "components";

import './questions-page.scss'

@connect(({questionsState}) => ({
    questions: questionsState.questions.data,
  }),
  (dispatch) => ({
    getQuestions: bindActionCreators(getQuestions, dispatch)
  })
)
export default class QuestionPage extends Component {
  static propTypes = {
    getQuestions: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      answers: []
    };
  }

  setValue = (value) => {
    console.log(value);
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

  componentDidMount() {
    const {getQuestions} = this.props;
    getQuestions()
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const answersList = (((questions || [])[step] || [])['incorrect_answers'] || []).concat((((questions || [])[step] || [])['correct_answer'] || ''));
    return (
      <div className="questions-page">
        <Radio
          question={((questions || [])[step] || {}).question}
          name={((questions || [])[step] || {}).question}
          answers={answersList}
          onChange={this.setValue}
        />
        <div className="questions-page__buttons">
            <Button
              type="button"
              onClick={this.prevStep}
              disabled={step === 0}
            >
              Back
            </Button>

          <Button
            onClick={this.nextStep}
            type="button"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}