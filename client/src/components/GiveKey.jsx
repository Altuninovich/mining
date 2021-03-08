import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'

export const GiveKey = ({uniqueKey}) => {
  //const splitUniqueKey = uniqueKey.match(/.{1,30}/g)

  return (
    <>
    <div className="container">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
            <b>СОХРАНИТЕ КЛЮЧ</b>
        </div>
        <div class="card-action">
          <a><NavLink to="/mining">Продолжить</NavLink></a>
        </div>
      </div>
    </div>

  </div>
  <p><b>Key:  </b>{uniqueKey}</p>
  </>
  )
}