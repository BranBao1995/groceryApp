import React, { Component } from 'react';


import classes from './editor.css';


class Editor extends Component {



    render() {

        return (

            <form className={classes.container}>

                <textarea placeholder="type here">

                </textarea>

            </form>

        )

    }


};


export default Editor;