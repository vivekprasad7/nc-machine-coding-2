import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { HabitCard } from '../../components/habit-card/habitCard';
import { Navbar } from '../../components/navbar/navbar';
import "./archived.css"

export const Archived = () => {
  const {archiveListData} = useAppContext();
  return (
    <div className='archive-list'>
      <Navbar/>
      <h2>Archive List</h2>
        {
          archiveListData.map((item) => {
            console.log(item)
            return(
              <HabitCard item={item}/>
            )
          })
        }
    </div>
  )
}
