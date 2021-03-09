import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import {useHistory} from 'react-router-dom'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const InputKey = () => {
  const auth = useContext(AuthContext)
  const [text, setText] = useState('')
  const history = useHistory()
  const {error, request, clearError} = useHttp()
  const message = useMessage();

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])


  const changeHandler = (event) => {
    setText(event.target.value)
  };

  const registerHandler = async () => {
    try {
      const response = await request('/api/register/', 'POST', {text})
      if (response.success) {
        //auth.login({isAuthenticated: text})
        auth.isAuthenticated = true
        //auth({isAuthenticated: true})
        //AuthContext({isAuthenticated: true})
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
              <textarea value={text} onChange={changeHandler} id="textarea1"
                        className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">Введите ключ</label>
            </div>
          </div>
        </form>
        <button onClick={registerHandler} className="btn waves-effect waves-light" type="submit" name="action">Отправить
        </button>
      </div>
  )
}