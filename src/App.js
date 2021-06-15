import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { TriviaGame, Settings, Login } from './pages';
import FeedBack from './pages/FeedBack';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/trivia" component={ TriviaGame } />
      <Route path="/settings" component={ Settings } />
      <Route path="/feedback" component={ FeedBack } />
    </Switch>
  );
}
