import React from 'react'
import "./habitForm.css"
import { useAppContext } from '../../contexts/AppContext'
import {v4 as uuid} from "uuid"

export const HabitForm = () => {
  const { displayProps, setDisplayProps, habitFormData, setHabitFormData, addHabitHandler , editHabit} = useAppContext();

  const { name, repeat, goal, timeOfDay, startDate} = habitFormData;


  return (
    <div className='form' style={{ display: displayProps.isFormVisible ? "block" : "none" }}>

      <h3>ADD NEW HABIT</h3>

      <div onClick={() => {
      setDisplayProps({...displayProps, isFormVisible : false, isEdit:false})
      setHabitFormData({   
        id:"",
      name:"",
      repeat:"",
      goal:"",
      timeOfDay:"",
      startDate:"",})
    }}
    className='close-icon'>
        <i class="fa fa-x"></i>
      </div>

      <div className='form-block-unit'>
        <label> Name:
          <input  value={name} onChange={(e) => setHabitFormData({...habitFormData, name: e.target.value})} />
        </label>
      </div>

      <div className='form-section'>

        <div className='form-unit'>
          <label>Repeat:
            <select value={repeat} onChange={(e) => setHabitFormData({...habitFormData, repeat: e.target.value})}>
              <option value="Daily">Daily</option>
              <option value="Alternate Days">Alternate Days</option>
              <option value="3 times a Week">3 times a Week</option>
              <option value="Once a Week">Once a Week</option>
            </select>
          </label>
        </div>

        <div className='form-unit'>
          <label>Goal:
            <select  value={goal} onChange={(e) => setHabitFormData({...habitFormData, goal: e.target.value})}>
              <option value="One Hour Daily">One Hour Daily</option>
              <option value="Two Hour Daily">Two Hour Daily</option>
              <option value="Three Hour Daily">Three Hour Daily</option>
            </select>
          </label>

        </div>
      </div>

      <div className='form-section'>

        <div className='form-unit'>

          <label>Time of Day:
            <select value={timeOfDay} onChange={(e) => setHabitFormData({...habitFormData, timeOfDay: e.target.value})}>
              <option value="Anytime">Anytime</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night" >Night</option>
            </select>
          </label>
        </div>

        <div className='form-unit'>

          <label>Start Date:
            <input value={startDate} onChange={(e) => setHabitFormData({...habitFormData, startDate: e.target.value})} type='date' />
          </label>
        </div>
      </div>

      <div className='form-block-unit'>
        <button onClick={() => {
          displayProps.isEdit ? 
          editHabit(habitFormData) :
           addHabitHandler({...habitFormData, id:uuid()});
           setDisplayProps({...displayProps, isEdit :false, isFormVisible:false});
           
           }}>
            
             {displayProps.isEdit ? "Edit Habit" : "Add Habit"}</button>
      </div>

    </div>
  )
}
