import React, { Component } from 'react';
import { Provider } from 'react-redux' 
import { BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import './App.css';
import Login from '@/views/login/index'
import Index from '@/views/index/index'
import NotFound from '@/components/notFound'
import store from '@/store'
class App extends Component {
    render() {
        return (
            <Provider store={store}> 
                    <Router>
                        <div className="App">
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to='/index/stores' push />} />
                                <Route path="/index" component={Index} />
                                <Route path="/404" component={NotFound} />
                                <Route path="/login" component={Login} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </Router>
            </Provider> 
        );
    }
}

export default App