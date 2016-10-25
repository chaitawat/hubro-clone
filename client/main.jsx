import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';
import Overview from '../imports/ui/pages/Overview.jsx';
import Forecast from '../imports/ui/pages/Forecast.jsx';



import PageNotFound from '../imports/ui/pages/PageNotFound.jsx';

Meteor.startup(() => {
  render((
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Overview} />

              <Route path="forecast" component={Forecast}/> 
              <Route path="*" component={PageNotFound} />
          </Route>
      </Router>
  ), document.getElementById("app"));
});
