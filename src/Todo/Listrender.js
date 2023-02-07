import React from 'react'
import styles from './TodoMain.module.css'

export default function Listrender(props) {
  return (
    <>
    <div className={styles.home}>
      
    
    {props.list.map((list)=>{
        return (
            <div>
                <div>
                    {list.title} ({list.date.toLocaleString()})
                </div>
            </div>
        )
    })}
    </div>
    </>
  )
}