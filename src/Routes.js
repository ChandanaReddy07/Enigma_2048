import React, { useEffect } from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Start from "../src/components/start"
import App from "../src/App"
import Game from './components/Game';
import { Stars } from './components/stars';
import { StarsSharp } from '@material-ui/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Routes=()=>{
    useEffect(()=>{
        AOS.init({
            offset: 400, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000 // values from 0 to 3000, with step 50ms
          });
    },[]) 
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/Enigma_2048" exact component={Start}/>
            <Route path="/game"  component={Game}/>
            <Route path="/about"  component={Stars}/>

           
          
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;
