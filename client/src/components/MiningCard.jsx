import React, { useEffect, useState, useCallback } from 'react'
//import { useHttp } from '../hooks/http.hook'

//const {request} = useHttp()

export class MiningCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {balance: null, runMining: false}
  }

  stopMining = () => {
    this.setState({runMining: false})
    clearInterval(this.timerId)
  }

  ////
  mining = async () => {
    try {
      const response = await fetch('/api/faucet', {method:'GET'})
      const data = await response.json()
      this.setState({balance: data.balance, runMining: true})
   } catch (e) {}
  }
  ////

startMining = () => {
  this.mining() //////
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
/*
    this.timerId = setInterval(async () => {
      try {
          const response = await fetch('/api/faucet', {method:'GET'})
          const data = await response.json()
          //const data = await request('/api/faucet', 'GET')
          this.setState({balance: data.balance})
       } catch (e) {}
     }, 10000);
    */
}

componentWillUnmount() {
    clearInterval(this.timerId);
  }

/*
handleRemoveTask = (id) => () => {
    const { removeTaskThunk, currentTasks, removeTask } = this.props;
    removeTaskThunk(currentTasks, id);
};
*/
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




/*
export const MiningCard = () => {

    const [balance, setBalance] = useState(0)
    const {request} = useHttp()
    
        //const startMining = async () => {
           // try {
            //    const startTime = new Date
               // console.log('start')
               // const data = await request('/api/faucet', 'GET', {start: startTime})
                //setBalance(data.balance)
           // } catch (e) {}
         // }

    

    
    useEffect(async () => {
        const interval = setInterval(async () => {
            //console.log('hjop')
            //let startTime = new Date
            const data = await request('/api/faucet/', 'GET')
            //const data = await request('/api/register/', 'GET')
            //console.log(data);
            setBalance(data.balance)
            //startMining()
            }, 12000);
            return () => {
              clearInterval(interval);
            };
    },[balance])

    return (
       
            <div className="row">
              <div className="col s8" style={{paddingTop: '2rem'}}>
                <a className="waves-effect waves-light btn" style={{marginLeft: '10px'}}>Запуск</a>
                <a className="waves-effect waves-light btn" style={{marginLeft: '10px'}}>Остановка</a>
              </div>
              <div className="col s2" style={{paddingTop: '2rem'}}>
                  <b>Ваш баланс</b>
              </div>
              <div className="col s1" style={{paddingTop: '2rem'}}>
                  <b><big><big>{balance}</big></big></b>
              </div>
              <div className="col s1" style={{paddingTop: '2rem'}}>
                  
              </div>
            </div>
            
    )
}

//<a className="btn-floating btn-large cyan pulse"><i className="material-icons">attach_money</i></a>

*/