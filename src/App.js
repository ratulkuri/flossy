import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => {
  console.log(props)
    return (
    <div>
      <h1>Hats Page</h1>
      <button onClick={() => props.history.push(`${props.match.url}/13`)}>Link 13</button>
      <br/>
      <button onClick={() => props.history.push(`${props.match.url}/14`)}>Link 14</button>
      <br/>
      <button onClick={() => props.history.push(`${props.match.url}/15`)}>Link 15</button>
      <br/>
      <button onClick={() => props.history.push(`${props.match.url}/16`)}>Link 16</button>
      <br/>
    </div>
  );
}

const HatDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hat #{props.match.params.productId} Details Page</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/shop/hats" component={ HatsPage } />
        <Route path="/shop/hats/:productId" component={ HatDetails } />
      </Switch>
    </div>
  );
}

export default App;
