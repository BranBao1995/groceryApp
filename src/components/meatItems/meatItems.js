import React, { Component } from 'react';

import classes from './meatItems.css';
import Div from '../../hoc/div/div';
import chickenBreast from '../../assets/images/chickenBreast.jpg';
import wings from '../../assets/images/wings.jpg';
import porkChop from '../../assets/images/porkChop.jpg';
import sirloin from '../../assets/images/sirloin.jpg';
import bacon from '../../assets/images/bacon.jpg';
import sausage from '../../assets/images/sausage.jpg';
import lamb from '../../assets/images/lamb.jpg';

class MeatItems extends Component {


    render(){

        let source = null;
        let itemName = this.props.itemName;
        let inactive = null;

        if (this.props.quantity > 0) {

            inactive = false

        } else {

            inactive = true;

        }

        if (this.props.imageName === 'chickenBreast') {

            source = chickenBreast;

        } else if (this.props.imageName === 'wings') {

            source = wings;

        } else if (this.props.imageName === 'porkChop') {

            source = porkChop;

        } else if (this.props.imageName === 'bacon') {

            source = bacon;

        } else if (this.props.imageName === 'lamb') {

            source = lamb;

        } else if (this.props.itemName === 'sirloin') {

            source = sirloin;

        } else if (this.props.itemName === 'sausage') {

            source = sausage;

        }


        return (

            <div className={classes.container}>

                <div className={classes.thumbnail}>
                    <img src={source} alt="thumbnail" />
                    <p>{itemName}</p>
                </div>
                
                <div className={classes.buttons}>

                    <button className={classes.button} id="plus" onClick={this.props.onAddItem}>

                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                        viewBox="0 0 512 512" xmlSpace="preserve">
                            <g>
	                            <g>
		                            <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			                            v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
	                            </g>
                            </g>
                        </svg>
                    </button>

                    <button className={classes.button} id="minus" onClick={this.props.onMinusItem} disabled={inactive}>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                        viewBox="0 0 512 512" xmlSpace="preserve">
                            <g>
	                            <g>
		                            <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
	                            </g>
                            </g>
                        </svg>
                    </button>

                </div>

            </div>

        )

    }


}


export default MeatItems;