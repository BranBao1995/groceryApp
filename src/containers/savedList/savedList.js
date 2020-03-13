import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from '../../axios-post';

import classes from './savedList.css';
import Div from '../../hoc/div/div';
import Spinner from '../../components/UI/spinner/spinner';
import ListItems from '../../components/listItems/unsaved/listItems';
import * as actions from '../../store/actions/index';
import errorHandler from '../../hoc/div/errorHandler';
// import errorHandler from '../../hoc/div/errorHandler';


class SavedList extends Component {


    state = {

        display: 'empty',
        items: ['carrot', 'lettuce', 'cucumber', 'spinach', 'potato', 'tomato', 'chickenBreast', 'wings', 'porkChop', 'bacon', 'lamb',
                    'sirloin', 'sausage', 'coke', 'juice', 'coffee', 'gingerAle', 'iceTea', 'sparklingWater', 'coconutWater', 'tea',
                 'milk', 'soyMilk', 'whippedCream', 'cheese', 'butter', 'yogurt', 'eggs', 
                 'chips', 'chocolate', 'iceCream', 'nuts', 'candy', 'cookies', 'biscuits']

    }

    orderHandler = () => {

        const data = {

            groceryItems: this.props.items

        }

        this.props.save(data);

    }


    render() {

        let content = null;
        let displayButtons = null;

        const defaultMessage = <p className={classes.message}>Your list appears to be empty.</p>;
        
        let list = this.state.items.map(el => {

            return (

                <li key={el}>
                    <ListItems name={el} quantity={this.props.items[el]} onDeleteItem={() => this.props.delete(el)} />
                </li>

            )

        });

        // let list = Object.keys(this.props.items).map(el => {

        //     return <ListItems key={el} name={el} quantity={this.props.items[el]} />

        // });

        if (this.props.active && !this.props.loading) {

            content = list;

            if(this.props.logoutState) {

                displayButtons = (

                    <div className={classes.buttons}>
                        <NavLink to="/login">Please Login</NavLink>
                    </div>

                )
                

            } else {

                displayButtons = (
                    <div className={classes.buttons}>
                        <button className={classes.button} onClick={this.props.clear}>Clear</button>
                        <button className={classes.button} onClick={this.orderHandler}>Save</button>
                    </div>
                )

            }
            

        } else if (this.props.active && this.props.loading) {

            content = <Spinner />;
            displayButtons = null;

        } else if (!this.props.active) {

            content = defaultMessage;
            displayButtons = null;

        }

        

        return (


                <Div classes={classes.container}>

                    <ul className={classes.list}>

                        {content}

                    </ul>

                    {displayButtons}

                </Div>

                // {/* <div className={classes.modal}>

                //     <form className={classes.form}>

                //         <input type="text" placeholder="Enter a name"></input>
                //         <button>OK</button>

                //     </form>

                // </div> */}
            
            
        )

    }

};

const mapStateToProps = (state) => {

    return {

        items: state.counter.items,
        active: state.counter.activeList,
        loading: state.save.loading,
        logoutState: state.auth.isLoggedOut

    }


};

const mapDispatchToProps = (dispatch) => {

    return {

        clear: () => dispatch(actions.clearList()),
        delete: (itemName) => dispatch(actions.deleteItem(itemName)),
        save: (postData) => dispatch(actions.saveToServer(postData))

    }

};


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(SavedList, axios));