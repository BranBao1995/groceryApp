import React from 'react';

import classes from './itemLabel.css';
import vegetables from '../../assets/images/vegetables.jpg';
import meat from '../../assets/images/meat.jpg';
import diary from '../../assets/images/diary.jpg';
import snacks from '../../assets/images/snacks.jpg';
import beverages from '../../assets/images/beverages.jpg';

const itemLabel = (props) => {

    let source = null;
    let itemName = props.itemName;

    if (props.imageName === 'vegetables') {

        source = vegetables;

    } else if (props.imageName === 'meat') {

        source = meat;

    } else if (props.imageName === 'diary') {

        source = diary;

    } else if (props.imageName === 'snacks') {

        source = snacks;

    } else if (props.imageName === 'beverages') {

        source = beverages;

    }

    return (

        <div className={classes.container} onClick={() => props.clicked(itemName)}>

            <img src={source} alt="thumbnail" />
            <h2>{itemName}</h2>

        </div>

    )


};


export default itemLabel;