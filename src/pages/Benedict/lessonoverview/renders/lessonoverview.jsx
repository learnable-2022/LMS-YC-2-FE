import React from 'react';
import Leftbar from '../jsfiles/leftbar';
import Mainbar from '../jsfiles/mainbar';
import styles from './lesssonoverview.module.css';
function Lessonoverview() {
  return (
    <div className={styles.lessonoverview}>
       <Leftbar/>
      <Mainbar/>
    </div>
  )
}

export default Lessonoverview
