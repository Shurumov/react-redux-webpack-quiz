import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

export class Select extends Component {
  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
  };
  render() {
    const { title, options, onChange } = this.props;
    return (
      <FormGroup>
        <Label for="select">{title}</Label>
        <Input type="select" name="select" id="select" onChange={(e) => onChange(e.target.value)}>
          {options.map(item => (
            <option value={item.value} key={item.value}>{item.label}</option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}