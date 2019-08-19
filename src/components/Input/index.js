import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';


export class InputField extends Component{
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    forId: PropTypes.string,
    placeholder: PropTypes.string,
    max: PropTypes.number,
    onChange: PropTypes.func,
  };

  render() {
    const { label, type, name, id, forId, placeholder, max, onChange } = this.props;
    return (
      <FormGroup>
        <Label for={forId}>{label}</Label>
        <Input onChange={e => onChange(e.target.value)} type={type} name={name} id={id} placeholder={placeholder} max={max}/>
      </FormGroup>
    );
  }
}