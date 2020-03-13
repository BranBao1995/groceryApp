import React from 'react';

import classes from './background.css';


const background = (props) => {

    let component = null;

    if (props.show) {

        component = <div className={classes.background} onClick={props.clicked}></div>

    } else if (!props.show) {

        component = null;

    }

    return component;


}

export default background;