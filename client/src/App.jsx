import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navbar} from './components/Navbar'
import 'materialize-css'
import { AuthCard } from './pages/AuthCard'
import { MiningCard } from './components/MiningCard';

function App() {
  return (
    <div className="container">
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/auth" component={AuthCard} />
                <Route path="/mining" component={MiningCard} />
            </Switch>
        </Router>
    </div>
)
}

export default App
