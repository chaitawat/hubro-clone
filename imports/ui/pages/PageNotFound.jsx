import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'material-ui/svg-icons/social/sentiment-dissatisfied';


export default class PageNotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-not-found" className="page">
                <Icon/> <div>404 PAGE NOT FOUND.</div>
            </div>
        );
    }
}
