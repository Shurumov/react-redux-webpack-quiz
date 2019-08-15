import React, {Fragment} from 'react';
import {Radio, Button} from 'components';


export default class TestPage extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Ха</h1>
        <Button
          type="button"
          onClick={()=>{console.log(1);}}
        >
          Кнопка
        </Button>
        <Button
          type="button"
          onClick={()=>{console.log(1);}}
          disabled
        >
          Кнопка
        </Button>
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