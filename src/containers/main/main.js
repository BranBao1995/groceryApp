import React from 'react';

import classes from './main.css';
import Div from '../../hoc/div/div';
import Menu from '../menu/menu';
import SavedList from '../savedList/savedList';

const main = (props) => {


    return (

        <Div classes={classes.container}>

            <Menu />
            <SavedList />

        </Div>

    )


}


export default main;