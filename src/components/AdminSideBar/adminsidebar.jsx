import React from 'react';
import styles from './adminSidebar.module.css';
// import { MdLogout } from "react-icons/md";
import { Logo } from "../../assets"
import AdminSidebarCont from './AdminSideBarCont';
import AdminSidebarList from './AdminSidebarList';
import { Outlet } from 'react-router';


function AdminSidebar() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.dashboardNav}>
        <div className= {styles.lefttop}>
        <img src= {Logo} alt=""/>
        </div>
        <div className= {styles.leftmain}>
          <div className= {styles.home}>
            <AdminSidebarCont barContent = {AdminSidebarList}/>
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
      </div> */}

      <main>
        <div className= {styles.mainContainer}>
          <Outlet />
        </div>
        
      </main>
      
    </div>
  )
}

export default AdminSidebar