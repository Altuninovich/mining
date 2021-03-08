import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import {useHistory} from 'react-router-dom'
/*
const InputKey = () => {
    return (
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea value={text} onChange={changeHandler} id="textarea1" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">Введите ключ</label>
            </div>
          </div>
        </form>
        <button onClick={registerHandler} className="btn waves-effect waves-light" type="submit" name="action">Отправить
        </button>
      </div>
      )
}
*/
export const InputKey = () => {
  const [text, setText] = useState('')
  //const [balance, setBalance] = useState('')
  //const [miner, setMiner] = useState(null)
  const history = useHistory()
  const {loading, error, request, clearError} = useHttp()

  const changeHandler = (event) => {
    setText(event.target.value)
};

  const registerHandler = async () => {
    try {
      //const textWithoutSpaces = text.split(' ').join('')
      const response = await request('/api/register/', 'POST', {text})
        //const data = await request('/api/auth/register', 'GET', {});
        //console.log(data)
        //message(data.message);
        if (response.success) {
          history.push('/mining')
        }
        
    } catch (error) {
        
    }
}

  return (
      <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea value={text} onChange={changeHandler} id="textarea1" className="materialize-textarea"></textarea>
            <label htmlFor="textarea1">Введите ключ</label>
          </div>
        </div>
      </form>
      <button onClick={registerHandler} className="btn waves-effect waves-light" type="submit" name="action">Отправить
      </button>
    </div>
  )
}