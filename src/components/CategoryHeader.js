import React from 'react';
import PropTypes from 'prop-types';

// UI import
import { Paper, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';

// styled components
import { CenteredRow } from '../styles/StyledComponents';

// CategoryHeader represents the header (title and the hovering paper) of a category card
export default class CategoryHeader extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <Paper elevation={2} style={{ padding: 5 }}>
          <CenteredRow style={{ justifyContent: 'center', position: 'relative' }}>
            <h2 style={{ margin: 10 }}>{name}</h2>
            <IconButton
              style={{ position: 'absolute', rop: 0, right: 0 }}
              onClick={() => console.log('click delete')}
            >
              <RemoveIcon style={{ color: 'red' }}/>
            </IconButton>
          </CenteredRow>
        </Paper>
      </div>
    );
  }
}

CategoryHeader.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};