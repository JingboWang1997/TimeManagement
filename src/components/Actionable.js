import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '@material-ui/core';
import { Note, Row } from '../styles/StyledComponents';

export default class Actionable extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <Row style={style, {alignItems: 'center'}}>
        <Checkbox
          checked={false}
        />
            actionable
        <Note style={{paddingLeft: 10}}>estimated duration</Note>
      </Row>
    );
  }
}

Actionable.propTypes = {
  style: PropTypes.object
};