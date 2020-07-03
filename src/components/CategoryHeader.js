import React from 'react';

import { Paper } from '@material-ui/core';


export default class CategoryHeader extends React.Component {
    render() {
      return (
        <div>
            <Paper elevation={2} style={{ padding: 5 }}>
                <h2 style={{ margin: 10 }}>Category</h2>
            </Paper>
        </div>
      );
    }
}