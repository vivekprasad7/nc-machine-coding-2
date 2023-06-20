import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import { useAppContext } from '../../contexts/AppContext'

export const Navbar = () => {
  const { displayProps, setDisplayProps} = useAppContext();

  function showFormToggle(){
    setDisplayProps({...displayProps, isFormVisible: !displayProps.isFormVisible})
  }

  return (
    <nav className='navbar'>
        <div className='nav-links'>
        <NavLink to="/">All Habits</NavLink>
        <NavLink to="/archive">Archive</NavLink>
        </div>

        <div className='nav-button'>
            <button onClick={showFormToggle}>+ Add New Habit</button>
        </div>

    </nav>
  )
}
