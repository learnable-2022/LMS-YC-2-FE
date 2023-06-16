import React from 'react';
import Leftbar from '../jsfiles/leftbar';
import Mainbar from '../jsfiles/mainbar';
import styles from './pageadminoverview2.module.css';
function Pageadminoverview() {
  return (
    <div className={styles.adminoverviewcss}>
       <Leftbar/>
      <Mainbar/>
    </div>
  )
}

export default Pageadminoverview
