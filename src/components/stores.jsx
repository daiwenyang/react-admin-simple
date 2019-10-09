import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";

class Stores extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path={`${this.props.match.url}/:id`} component={()=> <h3>this is store</h3>} />
                    <Route exact path={this.props.match.url} render={() => <h3>this is store list.</h3>}/>
                </Switch>
            </div>
        )
    }
}
export default Stores;