import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import AddTransaction from './components/add';
import DisplayTransaction from './components/displayTransaction';
import NoPageFound from './components/noPageFound';

import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

 

  const [transactions, setTransactions]= useState([]);

  const add= ((transactionItem, amount, transactionType)=>{
    setTransactions ((transactions)=>[...transactions, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}]);
  });

  return (
    <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Login/>

        </Route>
        <Route path="/home">
        <Home add={add} transactions={transactions}/>
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>

        <Route path="*">
          <NoPageFound/>
        </Route>

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
