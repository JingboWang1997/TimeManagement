import React from 'react';

import { Checkbox } from '@material-ui/core'
import { Note, Row, NoMarginP } from '../styles/StyledComponents';

export default class Actionable extends React.Component {
    render() {
      return (
          <Row style={this.props.style, {alignItems: 'center'}}>
            <Checkbox
              checked={false}
            />
            actionable
            <Note style={{paddingLeft: 10}}>estimated duration</Note>
          </Row>
      );
    }
}