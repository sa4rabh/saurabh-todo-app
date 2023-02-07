import React from 'react'
import Listrender from './Listrender'
import styles from './TodoMain.module.css'

export default function Next7Days(props) {
  const date = new Date()
  const filteredList = props.list.filter((task)=>{
    const diffTime = task.date - date
    const diffDays = Math.ceil(diffTime/(1000*60*60*24))
    if(diffDays<7 && diffDays >= 0){
      return true
    }
    return false
  })
  return (
    <div className={styles.home}>
      <Listrender list={filteredList}/>
    </div>
  )
}