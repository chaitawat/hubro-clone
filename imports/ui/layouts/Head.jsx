import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ExistToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import LangIcon from 'material-ui/svg-icons/action/language';


import { Link } from 'react-router';


export default class Head extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const bg = "url("+Meteor.absoluteUrl()+"header.png)";
        return (
            <div className="head-container" style={{"backgroundImage": bg}}>
                <div className="head-logo">
                    <img src={Meteor.absoluteUrl() + "logo.png"}/>
                </div>
                <div className="head-menu"> 
                    <div className="head-lang">
                        <MuiThemeProvider>
                            <IconButton><LangIcon color="#FAFAFA" hoverColor="#EEEEEE" /></IconButton>
                        </MuiThemeProvider>
                    </div>
                    <div className="head-logout">
                        <MuiThemeProvider>
                            <IconButton><ExistToAppIcon color="#FAFAFA" hoverColor="#EEEEEE" /></IconButton>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}
