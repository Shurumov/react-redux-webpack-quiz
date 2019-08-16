import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions } from "store/actions/questions.actions";

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

  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions()
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        {((questions || [])[0] || {}).category}
      </div>
    );
  }
}