import React, {useEffect, useState, useContext} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import { InputKey } from '../components/InputKey'
import { GiveKey } from '../components/GiveKey'
import {AuthContext} from '../context/AuthContext'

export const AuthCard = () => {
const authContext = useContext(AuthContext)
const {request} = useHttp()
const [auth, setAuth] = useState(false)
const [uniqueKey, setKey] = useState(null)
useEffect(async () => {
  try {
  const data = await request('/api/register/', 'GET')
  setKey(data.key)
  setAuth(true)
  uniqueKey && authContext.login({isAuthenticated: true})
} catch (error) {
          
}
}, [])

if (auth) {
  return (
    <div className="container">
      {uniqueKey ? <GiveKey uniqueKey={uniqueKey}/> : <InputKey/>}
    </div>  
  )
}

return (
  <div className="container">
    <Loader />
  </div>  
)

}