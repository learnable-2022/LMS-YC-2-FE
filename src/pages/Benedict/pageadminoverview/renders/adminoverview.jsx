import React from 'react';
import Leftbar from '../jsfiles/leftbar';
import Mainbar from '../jsfiles/mainbar';
import styles from './adminoverview.module.css';
function Adminoverview() {
  return (
    <div className={styles.adminoverviewcss}>
       <Leftbar/>
      <Mainbar/>
    </div>
  )
}

export default Adminoverview
