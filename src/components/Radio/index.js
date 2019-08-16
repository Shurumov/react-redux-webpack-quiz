import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Input} from 'reactstrap';

import './radio.scss';

export class Radio extends Component {
  static propTypes = {
    answers: PropTypes.array,
    name: PropTypes.string,
    question: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    answers: [],
    name: '',
  };

  render() {
    const {name, question, answers, onChange} = this.props;

    const list = answers.map((item) => (
      <FormGroup check key={item}>
        <Label>
          <Input type='radio' name={name} value={item} onChange={() => onChange(item)}/>
          {decodeURI(item)}
        </Label>
      </FormGroup>
    ));

    return (
      <FormGroup>
        <h2 className="title-radio">{decodeURI(question)}</h2>
        {list}
      </FormGroup>
    )
  }
}