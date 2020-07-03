import React from 'react';
import { Paper } from '@material-ui/core';

import CategoryHeader from './CategoryHeader';
import CategoryContent from './CategoryContent';


export default class Category extends React.Component {

    render() {
      return (
        <div>
            <Paper elevation={2} style={{width: 500, height: 500}}>
                <CategoryHeader/>
                <CategoryContent/>
            </Paper>
        </div>
      );
    }
}