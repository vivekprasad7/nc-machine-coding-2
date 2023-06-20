import React from 'react'
import "./habitDetails.css"
import { useAppContext } from '../../contexts/AppContext'

export const HabitDetails = () => {
    const {habitDetailsData, displayProps, setDisplayProps} = useAppContext()
    const {id, name, repeat, goal, timeOfDay, startDate} = habitDetailsData;
    return (
    <div className='form' style={{ display: displayProps.isHabitDetailsVisible ? "block" : "none" }}>
        <div onClick={() => {
      setDisplayProps({...displayProps, isFormVisible : false, isEdit:false, isHabitDetailsVisible:false})
    }}
    className='close-icon'>
        <i class="fa fa-x"></i>
      </div>
        <p>Name: {name} </p>
        <p>Repeat: {repeat} </p>
        <p>Goal: {goal} </p>
        <p>timeOfDay: {timeOfDay} </p>
        <p>startDate: {startDate} </p>
    </div>
  )
}
