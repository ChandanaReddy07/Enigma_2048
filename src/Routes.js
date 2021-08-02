import React from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Start from "../src/components/start"
import App from "../src/App"
import Game from './components/Game';

const Routes=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Start}/>
            <Route path="/app" exact component={App}/>
            <Route path="/game" exact component={Game}/>
           
          
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;
