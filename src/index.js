import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from './Components/Login/Login.jsx'

class App extends React.Component{
  render() {
      return(
          <div style={{textAlign: 'center'}}>
              <h1>Hello World</h1>
          </div>
      );
  }
}

class Home extends React.Component {
  render(){
      return (<h1>Hi</h1>);
  }
}

ReactDOM.render((<Router>
  <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/' component={Login}/>
      <Redirect to='/' />
    </Switch>
      { /*<App />*/ }
</Router>), document.getElementById("index"));
