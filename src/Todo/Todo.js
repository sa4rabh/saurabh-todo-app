import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Header from './Header';
import MainSection from './MainSection';
import Sidenav from './Sidenav';
import styles from './TodoMain.module.css'


function App(props) {
  const navigate = useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  const [active,setActive] = useState("INBOX")
  return (
    <>
    <div className='container' style={{height:'100vh'}}>
      
    
    <div className={styles.home}>
      
      {props.name ? (<div>
        <Header name={props.name} style={{height:'20vh'}}/>
      <div className="row">
        <div className='col-md-2' style={{height:'40vh'}}>
          <Sidenav change={setActive}/>
        </div>
        <div className='col-md-10'>
          <MainSection active={active} style={{height:'10vh'}}/>
        </div>
        <button className={styles.button} onClick={handleSignOut}>SignOut</button>
      </div>
      </div>):<div className={styles.home}>
      "Login Please"
      </div>}

     
    </div>
    </div>
    </>
  );
}

export default App;