import React from 'react'
import "./habitCard.css"
import { useAppContext } from '../../contexts/AppContext'

export const HabitCard = ({item}) => {

    const {  archiveHandler, deleteHandler, displayProps, setDisplayProps, setHabitFormData, setHabitDetailsData} = useAppContext();

  

    const editHandler = (habit) => {
      setHabitFormData(habit);
      setDisplayProps({...displayProps, isEdit :true, isFormVisible : true})
      
  }


  return (
    <>
    <div onClick={() => {
      setDisplayProps({...displayProps, isHabitDetailsVisible : true}) 
      setHabitDetailsData(item)
  
  }} className='habit-card'>
        <div className='contents'>

        <div className='title'>
        <h3>{item.name}</h3>
        </div>

        <div className='card-icons'>
        <i onClick={() => editHandler(item)} class="fa fa-edit"></i>
        <i onClick={() => archiveHandler(item.id) } class="fa fa-archive"></i>
        <i onClick={() => deleteHandler(item.id)} class="fa fa-trash"></i>
        </div>

        </div>
    </div>
    </>
  )
}
