import React from 'react';
import styles from './adminSidebar.module.css';

function AdminSidebarCont({barContent}) {
  return (
    <div className={styles.barcontent}>
      <ul>
        {barContent && barContent.map((bar, index) =>(
            <li key = {index}>
                <a href="h"><i>{bar.logo}</i>
               <span>{bar.name}</span>
            </a></li>
        ))}
      </ul>
    </div>
  )
}

export default AdminSidebarCont