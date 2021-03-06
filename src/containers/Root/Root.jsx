import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Theme } from '../../styleguide';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import Dashboard from '../../modules/Dashboard';
import NoMatch from '../../components/NoMatch';
import Firebase from '../../modules/Firebase';
import Login from '../../modules/Firebase/containers/Login';
import SpellList from '../../modules/Casting/containers/SpellList';
import { createStore } from '../../state';
import PrivateRoute from '../../components/PrivateRoute';

injectTapEventPlugin();
const store = createStore();

export default function Root() {
  return (
    <Provider store={store}>
      <div id="react-root">
        <MuiThemeProvider muiTheme={Theme}>
          <div>
            <BrowserRouter>
              <div>
                <Firebase />
                <Header />
                <Paper zDepth={1} style={{ margin: 0, padding: '10px' }}>
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/casting/spells" component={SpellList} />
                  <Route component={NoMatch} />
                </Paper>
                <Sidebar />
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </div>
    </Provider>
  );
}
