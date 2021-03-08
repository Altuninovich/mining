import React, {useCallback, useContext, useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {LinkCard} from '../components/LinkCard'
import { InputKey } from '../components/InputKey'
import { Navbar } from '../components/Navbar'
import { GiveKey } from '../components/GiveKey'

export const AuthCard = () => {
//console.log(uniqueKey)
const {request} = useHttp()
const [auth, setAuth] = useState(false)
const [uniqueKey, setKey] = useState(null)
//let uniqueKey = 'ruuben'
useEffect(async () => {
  try {
  const data = await request('/api/register/', 'GET')
  setKey(data.key)
  setAuth(true)
} catch (error) {
          
}
}, [])

if (auth) {
  console.log(uniqueKey)
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

/*
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [link, setLink] = useState(null)
  const linkId = useParams().id

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLink(fetched)
    } catch (e) {}
  }, [token, linkId, request])

  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && link && <LinkCard link={link} /> }
    </>
  )
  */
}