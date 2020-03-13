import React, { Component } from 'react';

import classes from './vegeItems.css';
import Div from '../../hoc/div/div';
import lettuce from '../../assets/images/vegetables.jpg';
import carrot from '../../assets/images/carrot.jpg';
import cucumber from '../../assets/images/cucumber.jpg';
import potato from '../../assets/images/potato.jpg';
import tomato from '../../assets/images/tomato.jpg';
import spinach from '../../assets/images/spinach.jpg';


class VegeItems extends Component {


    render(){

        let source = null;
        let itemName = this.props.itemName;
        let inactive = null;

        if (this.props.quantity > 0) {

            inactive = false

        } else {

            inactive = true;

        }

        if (this.props.imageName === 'lettuce') {

            source = lettuce;

        } else if (this.props.imageName === 'spinach') {

            source = spinach;

        } else if (this.props.imageName === 'cucumber') {

            source = cucumber;

        } else if (this.props.imageName === 'potato') {

            source = potato;

        } else if (this.props.imageName === 'tomato') {

            source = tomato;

        } else if (this.props.itemName === 'carrot') {

            source = carrot;

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


export default VegeItems;