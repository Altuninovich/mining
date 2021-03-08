import React from 'react'
import {NavLink} from 'react-router-dom'

export const GiveKey = ({uniqueKey}) => {

  return (
    <>
    <div className="container">
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
            <b>СОХРАНИТЕ КЛЮЧ</b>
        </div>
        <div className="card-action">
          <NavLink to="/mining">Продолжить</NavLink>
        </div>
      </div>
    </div>

  </div>
  <p><b>Key:  </b>{uniqueKey}</p>
  </>
  )
}