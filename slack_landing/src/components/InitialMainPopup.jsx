import React from 'react'
import { NavLink } from 'react-router-dom'

const InitialMainPopup = ({setInitialPopup}) => {
  return (
    <div className="initial_popup"><p>Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. <NavLink>Let's Go →</NavLink></p> <button onClick={() => setInitialPopup(false)}>X</button></div>
  )
}

export default InitialMainPopup
