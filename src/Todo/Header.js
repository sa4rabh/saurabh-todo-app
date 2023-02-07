import React from 'react'
import styles from './TodoMain.module.css'

export default function Header(props) {
  return (
    <div className={styles.home}>
      <h2>{props.name ? `welcome ${props.name}`:"login please"}</h2>
    </div>
  )
}