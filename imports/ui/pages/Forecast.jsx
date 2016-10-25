import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import NextIcon from 'material-ui/svg-icons/navigation/arrow-forward';

import GoogleChart from 'google-chart-react';

import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';


export default class Forecast extends Component {

    constructor(props) {
        super(props); 
        // this.handleTouchTap = this.handleTouchTap.bind(this);
    }


    drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Quantity', 'Standard', 'Lux',],
         ['2004',  1000,      400],
         ['2005',  1170,      460],
         ['2006',  660,       1120],
         ['2007',  1030,      540]
       ]);

       var options = {
         title: 'Forecast for year 3',
         legend: { position: 'bottom' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('chart'));

       chart.draw(data, options);
    }

    render() {
        const style = {
            margin: 12,
        };
        return (
            <div id="page-dashboard" className="page">

                <div className="row">
                    <div className="col-xs-6">

                        <RaisedButton
                            label="PREVIOUS YEAR"
                            style={style}
                            icon={<BackIcon />}
                        />
                        <RaisedButton
                            label="NEXT YEAR"
                            primary={true}
                            style={style}
                            labelPosition="before"
                            icon={<NextIcon />}
                        />

                        <RaisedButton style={style} label="ALL PRODUCTS" fullWidth={true} />
                        <RaisedButton style={style} label="STANDARD" fullWidth={true} backgroundColor="#2196F3"/>
                        <RaisedButton style={style} label="LUX" fullWidth={true} backgroundColor="#EF5350"/>
                        <RaisedButton style={style} label="GREEN" fullWidth={true}  backgroundColor="#4CAF50"/>

                        <Paper
                            style={{"margin": "12px", "width": "100%", "backgroundColor": "#009688", "color": "#FAFAFA", "textAlign": "center", "padding": "16px"}}
                            zDepth={1} >
                            <h3>How to use the forecasts</h3>
                            <span>Thes forecasts show the demand in the whole market, where you compete aginst a maximum of 4 other companies. Use this information to plan your pricing strategy.</span>
                        </Paper>
                    </div>

                    <div className="col-xs-6">

                        <div id="chart" style={{"height": "320px"}}>
        					<GoogleChart drawChart={this.drawChart} />
        				</div>
                    </div>
                </div>

            </div>
        );
    }
}
