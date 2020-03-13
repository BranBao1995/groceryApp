import React, { Component } from 'react';

import classes from './snackItems.css';
import Div from '../../hoc/div/div';
import chips from '../../assets/images/chips.jpg';
import chocolate from '../../assets/images/chocolate.jpg';
import iceCream from '../../assets/images/iceCream.jpg';
import nuts from '../../assets/images/nuts.jpg';
import candy from '../../assets/images/candy.jpg';
import cookies from '../../assets/images/cookies.jpg';
import biscuits from '../../assets/images/biscuits.jpg';

class SnackItems extends Component {


    render(){

        let source = null;
        let itemName = this.props.itemName;
        let inactive = null;

        if (this.props.quantity > 0) {

            inactive = false

        } else {

            inactive = true;

        }

        if (this.props.imageName === 'chips') {

            source = chips;

        } else if (this.props.imageName === 'chocolate') {

            source = chocolate;

        } else if (this.props.imageName === 'iceCream') {

            source = iceCream;

        } else if (this.props.imageName === 'nuts') {

            source = nuts;

        } else if (this.props.imageName === 'candy') {

            source = candy;

        } else if (this.props.itemName === 'cookies') {

            source = cookies;

        } else if (this.props.itemName === 'biscuits') {

            source = biscuits;

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


export default SnackItems;