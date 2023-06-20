import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbarWhite.css"
import { useAppContext } from '../../contexts/AppContext'

export const NavbarWhite = () => {
  const { displayProps, setDisplayProps} = useAppContext();

  function showFormToggle(){
    setDisplayProps({...displayProps, isFormVisible: !displayProps.isFormVisible})
  }

  return (
    <nav className='avbar'>
        <div className='av-links'>
        <NavLink to="/">All Habits</NavLink>
        <NavLink to="/archive">Archive</NavLink>
        </div>

        <div className='av-button'>
            <button onClick={showFormToggle}>+ Add New Habit</button>
        </div>

    </nav>
  )
}
