import React from 'react';
import Leftbar from '../jsfiles/leftbar';
import Mainbar from '../jsfiles/mainbar';
import styles from './lessonoverview2.module.css';
function Pagepreview() {
  return (
    <div className={styles.adminoverviewcss}>
       <Leftbar/>
      <Mainbar/>
    </div>
  )
}

export default Pagepreview