import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';
import { RouteTransition } from 'react-router-transition';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import Head from './layouts/Head.jsx';
import Menu from './layouts/Menu.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import '../style/backend.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { firstTime: true, open: true };
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }


    handleTouchTap() {
      alert('onTouchTap triggered on the title component');
    }

    render() {
        const style = {
            display: "inline-block"
        };

        const firstStateStyles = {
            "atEnter": { translateX: 0 },
            "atLeave": { translateX: 0 },
            "atActive": { translateX: 0}
        }

        const popStateStyles = {
            "atEnter": { translateX: -100 },
            "atLeave": { translateX: 180 },
            "atActive": { translateX: 0}
        }

        const pushStateStyles = {
            "atEnter": { translateX: 100, opacity: 1 },
            "atLeave": { translateX: -180, opacity: 0 },
            "atActive": { translateX: 0, opacity: 1}
        }

        let transitionStyle = pushStateStyles;

        if(this.state.firstTime) {
            transitionStyle = firstStateStyles;
        }
        else {
            transitionStyle = this.props.location.action === 'POP' ? popStateStyles : pushStateStyles;
        }

        this.state.firstTime = false;

        console.log("App Render: "+this.props.location.pathname)
        return (
            <div className="app">
                <div className="head">
                    <Head></Head>
                </div>
                <div className="menu">
                    <Menu></Menu>
                </div>
                <div className="body">
                    <MuiThemeProvider>
                        <RouteTransition
                         pathname={this.props.location.pathname}
                          {...transitionStyle}
                          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity:`${styles.opacity}` })}
                        >
                            {this.props.children}
                        </RouteTransition>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
