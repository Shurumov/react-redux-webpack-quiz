import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Input} from 'reactstrap';

import './radio.scss';

export class Radio extends Component {
  static propTypes = {
    answers: PropTypes.array,
    name: PropTypes.string,
    question: PropTypes.string,
  };

  static defaultProps = {
    answers: [],
    name: '',
  };

  render() {
    const {name, question, answers} = this.props;

    const list = answers.map((item) => (
      <Label key={item.value}>
        <Input type='radio' name={name} value={item.value}/>
        {item.label}
      </Label>
    ));

    return (
      <FormGroup>
        <h2 className="title-radio">{question}</h2>
        {list}
      </FormGroup>
    )
  }
}