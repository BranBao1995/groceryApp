import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './overviewItem.css';

import lettuce from '../../assets/images/vegetables.jpg';
import carrot from '../../assets/images/carrot.jpg';
import cucumber from '../../assets/images/cucumber.jpg';
import spinach from '../../assets/images/spinach.jpg';
import potato from '../../assets/images/potato.jpg';
import tomato from '../../assets/images/tomato.jpg';
import chickenBreast from '../../assets/images/chickenBreast.jpg';
import wings from '../../assets/images/wings.jpg';
import porkChop from '../../assets/images/porkChop.jpg';
import sirloin from '../../assets/images/sirloin.jpg';
import bacon from '../../assets/images/bacon.jpg';
import sausage from '../../assets/images/sausage.jpg';
import lamb from '../../assets/images/lamb.jpg';
import coke from '../../assets/images/coke.jpg';
import coffee from '../../assets/images/coffee.jpg';
import gingerAle from '../../assets/images/gingerAle.jpg';
import iceTea from '../../assets/images/iceTea.jpg';
import juice from '../../assets/images/juice.jpg';
import sparklingWater from '../../assets/images/sparklingWater.jpg';
import tea from '../../assets/images/tea.jpg';
import coconutWater from '../../assets/images/coconutWater.jpg';
import milk from '../../assets/images/milk.jpg';
import soyMilk from '../../assets/images/soyMilk.jpg';
import whippedCream from '../../assets/images/whippedCream.jpg';
import cheese from '../../assets/images/cheese.jpg';
import butter from '../../assets/images/butter.jpg';
import yogurt from '../../assets/images/yogurt.jpg';
import eggs from '../../assets/images/eggs.jpg';
import chips from '../../assets/images/chips.jpg';
import chocolate from '../../assets/images/chocolate.jpg';
import iceCream from '../../assets/images/iceCream.jpg';
import nuts from '../../assets/images/nuts.jpg';
import candy from '../../assets/images/candy.jpg';
import cookies from '../../assets/images/cookies.jpg';
import biscuits from '../../assets/images/biscuits.jpg';


class OverviewItem extends Component {


    render(){

        let thumbnail = null;

        let visible = null;

        if (this.props.quantity <= 0) {

            visible = {

                display: 'none'

            }

        } else {

            visible = {
                display: 'flex'
            }

        }


        switch (this.props.name) {

            case 'lettuce':
                thumbnail = lettuce;
                break;

            case 'carrot':
                thumbnail = carrot;
                break;

            case 'cucumber':
                thumbnail = cucumber;
                break;

            case 'spinach':
                thumbnail = spinach;
                break;

            case 'potato':
                thumbnail = potato;
                break;

            case 'tomato':
                thumbnail = tomato;
                break;

            case 'chickenBreast':
                thumbnail = chickenBreast;
                break;

            case 'wings':
                thumbnail = wings;
                break;

            case 'porkChop':
                thumbnail = porkChop;
                break;

            case 'bacon':
                thumbnail = bacon;
                break;

            case 'lamb':
                thumbnail = lamb;
                break;

            case 'sirloin':
                thumbnail = sirloin;
                break;

            case 'sausage':
                thumbnail = sausage;
                break;

            case 'coke':
                thumbnail = coke;
                break;

            case 'juice':
                thumbnail = juice;
                break;

            case 'coffee':
                thumbnail = coffee;
                break;

            case 'gingerAle':
                thumbnail = gingerAle;
                break;

            case 'iceTea':
                thumbnail = iceTea;
                break;

            case 'sparklingWater':
                thumbnail = sparklingWater;
                break;

            case 'coconutWater':
                thumbnail = coconutWater;
                break;

            case 'tea':
                thumbnail = tea;
                break;

            case 'milk':
                thumbnail = milk;
                break;

            case 'soyMilk':
                thumbnail = soyMilk;
                break;

            case 'whippedCream':
                thumbnail = whippedCream;
                break;

            case 'cheese':
                thumbnail = cheese;
                break;

            case 'butter':
                thumbnail = butter;
                break;

            case 'yogurt':
                thumbnail = yogurt;
                break;

            case 'eggs':
                thumbnail = eggs;
                break;

            case 'chips':
                thumbnail = chips;
                break;

            case 'chocolate':
                thumbnail = chocolate;
                break;

            case 'iceCream':
                thumbnail = iceCream;
                break;

            case 'nuts':
                thumbnail = nuts;
                break;

            case 'candy':
                thumbnail = candy;
                break;

            case 'cookies':
                thumbnail = cookies;
                break;

            case 'biscuits':
                thumbnail = biscuits;
                break;

            default:
                thumbnail = null;
                break;

        };

        return (

            <div className={classes.container} style={visible}>

                <img className={classes.thumbnail} src={thumbnail} alt={this.props.name}>

                </img>
                
                <div className={classes.info}>

                    <h3>{this.props.name}</h3>
                    <p>Qty: {this.props.quantity}</p>

                </div>

            </div>

        )

    }

}

export default OverviewItem;