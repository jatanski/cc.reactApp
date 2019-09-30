import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { allActions } from './redux/store';

import Menu from './components/Menu/Menu';
import FirstView from "./views/FirstView";
import Payments from "./views/Paments";
import MessagesView from './views/MessagesView';
import PaymentForm from './components/Payments/PaymentForm/PaymentForm'
import ClientPayments from './components/Payments/ClientPayments/ClientPayments';
const App = ({loginStatus, onFakeLogin}) => {
  return (
      <BrowserRouter>
        <Menu />
        <main className="MainContent">
            <Switch>
                <Route path="/" exact component={FirstView} />
                <Route path="/login" component={FirstView} />
                <Route path="/messages" component={MessagesView} />
                <Route path="/payment" component={Payments} />
                <Route path="/addpayment" component={PaymentForm} />
                <Route path="/myclientspayments" component={ClientPayments} />
                <Route render={() => (<h1>Error 404 - Trzeba coś tu zrobić =]</h1>)} />
            </Switch>
        </main>
        <button onClick={allActions.logIn}>FAKE LOGIN</button>
    </BrowserRouter>
  );
};

export default App;
