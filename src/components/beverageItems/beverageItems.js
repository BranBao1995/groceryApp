import React, { Component } from 'react';

import classes from './beverageItems.css';
import coke from '../../assets/images/coke.jpg';
import coffee from '../../assets/images/coffee.jpg';
import gingerAle from '../../assets/images/gingerAle.jpg';
import iceTea from '../../assets/images/iceTea.jpg';
import juice from '../../assets/images/juice.jpg';
import sparklingWater from '../../assets/images/sparklingWater.jpg';
import tea from '../../assets/images/tea.jpg';
import coconutWater from '../../assets/images/coconutWater.jpg';

class BeverageItems extends Component {


    render(){

        let source = null;
        let itemName = this.props.itemName;
        let inactive = null;

        if (this.props.quantity > 0) {

            inactive = false

        } else {

            inactive = true;

        }

        if (this.props.imageName === 'coke') {

            source = coke;

        } else if (this.props.imageName === 'juice') {

            source = juice;

        } else if (this.props.imageName === 'coffee') {

            source = coffee;

        } else if (this.props.imageName === 'gingerAle') {

            source = gingerAle;

        } else if (this.props.imageName === 'iceTea') {

            source = iceTea;

        } else if (this.props.itemName === 'coconutWater') {

            source = coconutWater;

        } else if (this.props.itemName === 'sparklingWater') {

            source = sparklingWater;

        } else if (this.props.itemName === 'tea') {

            source = tea

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


export default BeverageItems;