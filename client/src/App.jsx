import React, {useState, useCallback, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import {useRoutes} from './routes'
//import {useAuth} from './hooks/auth.hook'
//import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'
import { useHttp } from '../src/hooks/http.hook';
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

/*
function App() {
  const {request} = useHttp();
  const [auth, setAuth] = useState(false)
  const [uniqueKey, setKey] = useState('')
  //let uniqueKey = 'ruuben'
  useEffect(async () => {
    try {
    const data = await request('/api/register/', 'GET')
    setKey(data.key)
    setAuth(true)
  } catch (error) {
            
  }
  }, [auth])
  return (
    <div className="container">
      {auth ? <MiningPage uniqueKey={uniqueKey} setAuth={setAuth} /> : <Loader />}
    </div>  
  )
}

export default App
*/

/*

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        { isAuthenticated && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
*/