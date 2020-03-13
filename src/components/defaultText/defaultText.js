import React from 'react';

import classes from './defaultText.css';

const defaultText = (props) => {

    return (

        <div className={classes.container} onClick={props.clicked} >

                <p>
                    Click to start editing
                </p>

        </div>

    )

};

export default defaultText;