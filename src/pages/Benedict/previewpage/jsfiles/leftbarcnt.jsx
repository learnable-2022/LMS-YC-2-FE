import React from 'react';
import styles from'../styles/leftbar.module.css';

function Leftbarcnt({barContent}) {
  return (
    <div className={styles.barcontent}>
      <ul>
        {barContent && barContent.map((bar) =>(
            <li>
                <a href="h"><i>{bar.logo}</i>
               <span>{bar.name}</span>
            </a></li>
        ))}
      </ul>
    </div>
  )
}

export default Leftbarcnt