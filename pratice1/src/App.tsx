import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GroupContainer } from './containers';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends React.Component {

    public render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component="GroupContainer" />
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
