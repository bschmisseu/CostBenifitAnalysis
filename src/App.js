import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EntryContext } from './context/EntryContext.js';

import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegistrationPage.js';
import InputPage from './pages/InputPage.js';
import OutputPage from './pages/OutputPage.js';
import InputPagePast from './pages/InputPagePast';
import LogoutPage from './pages/LogoutPage';

export default function App() {
  const [entryId, setEntryContext] = React.useState("Null");
  return (
    <EntryContext.Provider value={[entryId, setEntryContext]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/input">
              <InputPage />
            </Route>
            <Route exact path="/inputpast">
              <InputPagePast />
            </Route>
            <Route exact path="/output">
              <OutputPage />
            </Route>
            <Route exact path="/logout">
              <LogoutPage />
            </Route>
          </Switch>
      </Router>
    </EntryContext.Provider>
  );
}
