import React, {Fragment} from 'react';
import {Radio} from 'components';

export default class TestPage extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Ха</h1>
        <Radio
          name="1"
          question='Квuestion'
          answers={[
            {
              value: 1,
              label: 'odin'
            },
            {
              value: 2,
              label: 'dva'
            }
          ]}
        />
      </Fragment>
    )
  }
}