import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Select, Button, InputField} from 'components'
import {CATEGORIES, DIFFICULTY, TYPE, ROUTES} from 'config/constants'
import {Form} from 'reactstrap';
import {setConfigParam, CONFIG_ACTIONS} from 'store/actions/config.actions'
import {stringify} from 'qs'

import './main-page.scss'

@connect(({config}) => ({
    config: config,
  }),
  (dispatch) => ({
    setConfigParam: bindActionCreators(setConfigParam, dispatch)
  })
)
export default class MainPage extends Component {
  static propTypes = {
    setConfigParam: PropTypes.func,
  };

  beginTest = () => {
    const {history, config} =this.props;
    history.push({pathname: ROUTES.QUESTIONS, search: `?${stringify(config)}`})
  };

  render() {
    const { setConfigParam } = this.props;
    return (
      <div className="main-page">
        <Form>
          <InputField
            label="Number of Questions:"
            type="number"
            name="number"
            id="countQuestions"
            forId="countQuestions"
            placeholder="Insert number"
            onChange={(value) => setConfigParam(CONFIG_ACTIONS.CONFIG_SET_NUMBER, +value)}
          />
          <Select
            title="Select Category:"
            options={CATEGORIES}
            onChange={(value) => setConfigParam(CONFIG_ACTIONS.CONFIG_SET_CATEGORY, +value)}
          />
          <Select
            title="Select Difficulty:"
            options={DIFFICULTY}
            onChange={(value) => setConfigParam(CONFIG_ACTIONS.CONFIG_SET_DIFFICULTY, value)}
          />
          <Select
            title="Select Type:"
            options={TYPE}
            onChange={(value) => setConfigParam(CONFIG_ACTIONS.CONFIG_SET_TYPE, value)}
          />

        </Form>
        <div className="main-page__button">
          <Button
            type="button"
            onClick={this.beginTest}
            addClass="flex-1"
          >
            Begin test
          </Button>
        </div>
      </div>
    );
  }
}