import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios-post';

import classes from './overview.css';
import Div from '../../../hoc/div/div';
import Spinner from '../../../components/UI/spinner/spinner';
import OverviewItem from '../../../components/overviewItem/overviewItem';
import errorHandler from '../../../hoc/div/errorHandler';
import * as actions from '../../../store/actions/index';



class Overview extends Component {


    render(){

        let content = null;

        const targetId = this.props.listId;

        if (this.props.items) {

            content = Object.keys(this.props.items).map(el => {

                return <OverviewItem  key={el} name={el} quantity={this.props.items[el]} />

            });

        } else {

            content = null;

        }

        return (

            <Div classes={classes.container}>

                <div className={classes.overview}>

                    {content}

                </div>

                <div className={classes.buttons} style={this.props.items ? {display: 'flex'} : {display: 'none'}}>

                    <button className={classes.button} onClick={()=>this.props.delete(targetId)}>Delete</button>
                    {/* <button className={classes.button} >Save</button> */}

                </div>

            </Div>

        );

    }

}

const mapStateToProps = (state) => {

    return {

        items: state.save.overview.items,
        listId: state.save.overview.id

    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        delete: (targetId) => dispatch(actions.deleteList(targetId))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Overview, axios));