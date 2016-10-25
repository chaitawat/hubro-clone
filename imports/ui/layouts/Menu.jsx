import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

import { Link, browserHistory } from 'react-router';

import {List, ListItem} from 'material-ui/List';

import OverviewIcon from 'material-ui/svg-icons/action/home';
import ForecastIcon from 'material-ui/svg-icons/action/trending-up';
import ProductionIcon from 'material-ui/svg-icons/file/cloud-done';
import BankIcon from 'material-ui/svg-icons/editor/attach-money';
import MarketIcon from 'material-ui/svg-icons/action/shopping-cart';

import BudgetIcon from 'material-ui/svg-icons/editor/pie-chart';
import CashFlowIcon from 'material-ui/svg-icons/editor/insert-chart';
import AccountingIcon from 'material-ui/svg-icons/action/account-balance-wallet';
import BalanceIcon from 'material-ui/svg-icons/action/account-balance';

import CompetitionIcon from 'material-ui/svg-icons/action/stars';

import SettingIcon from 'material-ui/svg-icons/action/settings';


import FontIcon from 'material-ui/FontIcon';

import Divider from 'material-ui/Divider';


export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const menuItemStyle = {"width": "100%"};
        return (
            <div className="menu-container">
                <div className="menu-user-avatar">
                    <MuiThemeProvider>
                        <Avatar src={Meteor.absoluteUrl() + "avatar.svg"} size={56}/>
                    </MuiThemeProvider>
                </div>
                <div className="menu-user-name">
                    <div style={{"color": "#FAFAFA"}}>Chaitawat Pawapoowadon</div>
                </div>
                <div className="menu-user-email">
                    Ar 1
                </div>
                <div className="menu-items">
                    <MuiThemeProvider>
                        <List>
                            <ListItem primaryText="Overview" leftIcon={<OverviewIcon />} containerElement={<Link to="/" />}/>
                            <ListItem primaryText="Forecast" leftIcon={<ForecastIcon color="green"/>} containerElement={<Link to="/forecast" />}/>
                            <ListItem primaryText="Production" leftIcon={<ProductionIcon />} containerElement={<Link to="/product" />}/>
                            <ListItem primaryText="Bank" leftIcon={<BankIcon />} containerElement={<Link to="/bank" />}/>
                            <ListItem primaryText="Market" leftIcon={<MarketIcon />} containerElement={<Link to="/market" />}/>
                            <Divider/>
                            <ListItem primaryText="Budget" leftIcon={<BudgetIcon />} containerElement={<Link to="/budget" />}/>
                            <ListItem primaryText="Cash flow" leftIcon={<CashFlowIcon />} containerElement={<Link to="/cashflow" />}/>
                            <ListItem primaryText="Accounting" leftIcon={<AccountingIcon />} containerElement={<Link to="/accounting" />}/>
                            <ListItem primaryText="Balance" leftIcon={<BalanceIcon />} containerElement={<Link to="/balance" />}/>
                            <Divider/>
                            <ListItem primaryText="Competition" leftIcon={<CompetitionIcon />} containerElement={<Link to="/competition" />}/>
                            <Divider/>
                            <ListItem primaryText="Setting" leftIcon={<SettingIcon />} containerElement={<Link to="/setting" />} />
                        </List>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
