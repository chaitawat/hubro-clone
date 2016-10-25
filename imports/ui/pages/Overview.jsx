import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


export default class Overview extends Component {

    constructor(props) {
        super(props);
        // this.state = {count: 11};
        // this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    // handleTouchTap(e) {
    //     console.log(this.state);
    // }
    render() {
        const style = {
            margin: 12,
        };
        return (
            <div id="page-dashboard" className="page">
                
            </div>
        );
    }
}
