import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

class Home extends Component{
  render(){
    return(
      <BrowserRouter>
          <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/happy">Happy</Link></li>
                <li><Link to="/guilty">Guilty</Link></li>
                <li><Link to="/sleepy">Sleepy</Link></li>
              </ul>

            <Route path="/happy" component={Happy} />
            <Route path="/guilty" component={Guilty} />
            <Route path="/sleepy" component={Sleepy} />
          </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
