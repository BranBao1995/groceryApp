import React, { Component } from 'react';

import classes from './diaryItems.css';
import milk from '../../assets/images/milk.jpg';
import soyMilk from '../../assets/images/soyMilk.jpg';
import whippedCream from '../../assets/images/whippedCream.jpg';
import cheese from '../../assets/images/cheese.jpg';
import butter from '../../assets/images/butter.jpg';
import yogurt from '../../assets/images/yogurt.jpg';
import eggs from '../../assets/images/eggs.jpg';

class DiaryItems extends Component {


    render(){

        let source = null;
        let itemName = this.props.itemName;
        let inactive = null;

        if (this.props.quantity > 0) {

            inactive = false

        } else {

            inactive = true;

        }

        if (this.props.imageName === 'milk') {

            source = milk;

        } else if (this.props.imageName === 'soyMilk') {

            source = soyMilk;

        } else if (this.props.imageName === 'whippedCream') {

            source = whippedCream;

        } else if (this.props.imageName === 'cheese') {

            source = cheese;

        } else if (this.props.imageName === 'butter') {

            source = butter;

        } else if (this.props.itemName === 'yogurt') {

            source = yogurt;

        } else if (this.props.itemName === 'eggs') {

            source = eggs;

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


export default DiaryItems;