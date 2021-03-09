import React, {useContext, useState} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export class Mining extends React.Component {
  constructor(props) {
    super(props)
    this.state = {balance: null, runMining: false}
  }

  stopMining = () => {
    this.setState({runMining: false})
    clearInterval(this.timerId)
  }

  
  mining = async () => {
    try {
      const response = await fetch('/api/faucet', {method:'GET'})
      const data = await response.json()
      this.setState({balance: data.balance, runMining: true})
   } catch (e) {}
  }
  

startMining = () => {
  this.mining() 
    this.timerId = setInterval(async () => {
      try {
        const response = await fetch('/api/faucet', {method:'GET'})
        const data = await response.json()
        this.setState({balance: data.balance, runMining: true})
     } catch (e) {}
   }, 10000);

}
  
componentDidMount() {
  this.startMining()
}

componentWillUnmount() {
    clearInterval(this.timerId);
  }

render() {
  
    const {runMining, balance} = this.state
    return (
       
      <div className="row">
        <div className="col s6" style={{paddingTop: '2rem'}}>
            <a onClick={this.startMining} disabled={runMining} className="waves-effect waves-light btn" style={{marginLeft: '10px'}}>Запуск</a>
            <a onClick={this.stopMining} disabled={!runMining} className="waves-effect waves-light btn" style={{marginLeft: '10px'}}>Остановка</a>
        </div>
        <div className="col s2" style={{paddingTop: '2rem'}}>
            <b>Ваш баланс</b>
        </div>
        <div className="col s3" style={{paddingTop: '2rem'}}>
            <b><big><big>{balance}</big></big></b>
        </div>
        <div className="col s1" style={{paddingTop: '2rem'}}>
          {runMining && <a className="btn-floating pulse"><i className="material-icons">attach_money</i></a>}
        </div>
      </div>
      
)

}
}

export const MiningCard  = () => {
  const authContext = useContext(AuthContext)
  //const [auth, setAuth] = useState(authContext.isAuthenticated)
  const history = useHistory()
  
  if (authContext.isAuthenticated) {
    return <Mining/>
  }
  
  history.push('/')
  return null
  }



