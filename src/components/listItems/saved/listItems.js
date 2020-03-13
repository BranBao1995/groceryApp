import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './listItems.css';


class ListItems extends Component {


    render(){

        return (

            <div className={classes.container} onClick={this.props.clicked}>

                <div className={classes.svg}>
                    <svg viewBox="0 0 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
                        <path d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm0 464c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.140625 123.652344-100.347656 223.859375-224 224zm0 0" />
                        <path d="m344 120h-16v-8h-16v8h-16v-8h-16v8h-16v-8h-16v8h-16v-8h-16v8h-16v-8h-16v8h-16v-8h-16v8h-16c-4.417969 0-8 3.582031-8 8v224c0 4.417969 3.582031 8 8 8h208c4.417969 0 8-3.582031 8-8v-224c0-4.417969-3.582031-8-8-8zm-8 224h-192v-208h8v8h16v-8h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8h16v-8h16v8h16v-8h8zm0 0" />
                        <path d="m168 184h144v16h-144zm0 0" />
                        <path d="m168 232h144v16h-144zm0 0" />
                        <path d="m168 280h144v16h-144zm0 0" />
                    </svg>
                </div>

                <div className={classes.info}>

                    <h3>Created: {this.props.name}</h3>
                    <p></p>

                </div>

            </div>

        )

    }


}

export default ListItems;