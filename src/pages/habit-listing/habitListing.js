import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { useAppContext } from '../../contexts/AppContext'
import { HabitForm } from '../../components/habit-form/habitForm';
import "./habitListing.css"
import { HabitCard } from '../../components/habit-card/habitCard';
import { HabitDetails } from '../../components/habitDetails/habitDetails';
import { NavbarWhite } from '../../components/navbar-white/navbarWhite';

export const HabitListing = () => {
  const {displayProps, setDisplayProps, habitList, unarchiveListData} = useAppContext()
  return (
    <>
    <div className="habit_listing" style={{filter: displayProps.isFormVisible || displayProps.isHabitDetailsVisible ? "blur(5px)" : "" }}>
      <Navbar/>
      {/* <NavbarWhite/> */}
      <h2>Habit Listing </h2>
      <button onClick={()=> setDisplayProps({...displayProps, isFormVisible : !displayProps.isFormVisible})}>Add New Habit</button>
      <div>
        {
          unarchiveListData.map((item) => {
            return (
              <HabitCard item={item}/>
            )
          })
        }
      </div>
      
      
    </div>
    <div className='modal'>
      
      { displayProps.isFormVisible && <HabitForm/> }

      </div>
      <div className='modal'>
        {displayProps.isHabitDetailsVisible && <HabitDetails/>}
      </div>
    </>
  )
}
