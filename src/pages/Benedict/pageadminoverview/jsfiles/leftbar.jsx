import React from 'react';
import styles from'../styles/leftbar.module.css';
import Leftbarcnt from './leftbarcnt';
import leftbarlist from './leftbarlist';
import Pic from '../img/learnZlogo.png';
import { MdLogout } from "react-icons/md";



function Leftbar() {
  return (
    <div className={styles.leftbar}>
      <div className= {styles.lefttop}>
      <img src={Pic} alt=""/>
      </div>
      <div className= {styles.leftmain}>
        <div className= {styles.home}>
          <Leftbarcnt barContent = {leftbarlist}/>
        </div>
      </div>
      <div className={styles.logout}>
        <div className={styles.logoutstev}> Steven O.</div>
      <div className={styles.logoutmain}>
       <div className={styles.logouticon}>
        <MdLogout/>
       </div>
       <div className={styles.logoutleta}>
        Logout
       </div>
      </div>
      </div>
    </div>
  )
}

export default Leftbar