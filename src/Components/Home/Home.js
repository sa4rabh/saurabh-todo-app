import React from 'react'
import { Link } from 'react-router-dom'
import styles from'./Home.module.css'
import image from './logo.png'

export default function Home() {
  return (
    <div className={styles.home}>
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/login">Login</Link>
          </div>
          <div className="col">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="body-container">
        <div className="container d-flex justify-content-center align-items-center">

          <div className="element mx-auto">
            <img src={image} alt="Img-todo" className="img-fluid d-block mx-auto" style={{ width: "150px", height: "100px" }} />
            <h1 className="img-fluid d-block mx-auto">Todo App</h1>
            <p>Welcome to Todo list app</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <ul className="list-group" style={{ width: '50%' }}>
            <li className="list-group-item">Improves time management and productivity</li>
            <li className="list-group-item">Reduces stress and anxiety by providing a clear plan of action</li>
            <li className="list-group-item">Helps prioritize tasks and achieve goals</li>
            <li className="list-group-item">Improves memory and focus by keeping track of tasks and deadlines</li>
            <li className="list-group-item">Encourages goal-setting and goal achievement</li>
            <li className="list-group-item">Provides a sense of accomplishment by crossing off completed tasks</li>
          </ul>
        </div>
      </div>  
      <br/><br/><br/>
      <div className="container d-flex justify-content-center align-items-center"> 
        <div className="card-body">
          <h5 className="container d-flex justify-content-center align-items-center">Made with 💕by saurabh</h5>
        </div>
      </div>
    </div>
    </div>
  )
}