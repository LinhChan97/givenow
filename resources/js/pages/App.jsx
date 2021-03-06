import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import AppBackEnd from './backend/App.jsx';
import LoginBackEnd from './backend/auth/Login.jsx';
import AppFrontEnd from './frontend/App.jsx';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/management" component={AppBackEnd} />
                            <Route path="/sign-in" component={LoginBackEnd} />
                            <Route component={AppFrontEnd} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

if(document.getElementById('app')) {
    ReactDOM.render(<App />,document.getElementById('app'));
}
