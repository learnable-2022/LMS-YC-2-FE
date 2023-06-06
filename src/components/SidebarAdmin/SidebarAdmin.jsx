import styles from "./sidebarAdmin.module.css"
import { LogoSvg} from "../../assets"
import AdminSidebarList from "./AdminSidebarList"
import { NavLink, Outlet } from "react-router-dom";
import { TiDivide } from "react-icons/ti";
import { useEffect, useState } from "react";

function SidebarAdmin() {
    const activeLink = (e) => {
        if (
            e?.target.classList.contains(styles.link) ||
            e.target.parentElement.classList.contains(styles.link) ||
            e.target.parentElement.parentElement.classList.contains(styles.link)
          ) {
            let links;
            e.target.classList.contains(styles.link) ? (links = Array.from(e.target.parentElement.children)) 
            : e.target.parentElement.classList.contains(styles.link) ? (links = Array.from(e.target.parentElement.parentElement.parentElement.children))
            : e.target.parentElement.parentElement.classList.contains(styles.link) ?  (links = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.children)) : "";
      
            links.forEach((li) => {
              if (li.classList.contains(styles.link)) {
                li.classList.remove(styles.active);
                if (
                  e.target.classList.contains(styles.link) ||
                  e.target.parentElement.classList.contains(styles.link)||
                  e.target.parentElement.parentElement.classList.contains(styles.link)
                ) {
                    e.target.classList.contains(styles.link) ? e.target.classList.add(styles.active)
                    : e.target.parentElement.classList.contains(styles.link) ? e.target.parentElement.classList.add(styles.active)
                    : e.target.parentElement.parentElement.classList.contains(styles.link) ? e.target.parentElement.parentElement.classList.add(styles.active) : "";
                  li.classList.remove(styles.active);
                  // setLinked(li)
                } else {
                  e.target.classList.remove(styles.active);
                }
              }
            });
           
          }

        // if(e.target.parentElement.parentElement.classList.contains(styles.link)){
        //   console.log(e.target.parentElement.parentElement.parentElement.parentElement.children)
        // }

        // console.log(e.target.parentElement.className)

    }

    // useEffect(() => {
    //   activeLink()
    // }, [linked])
    return (
        <div className = {styles.container}>
            <div className= {styles.sidebarContainer}>
                <div className= {styles.logo}>
                    <img src= {LogoSvg} alt=""/>
                    <h3>Learn.z</h3>
                </div>

                <div className= {styles.links}>
                    {AdminSidebarList.map((list, index) => (
                      <NavLink to = {`${list.link}`}  key = {index}>
                        <div className= {styles.link} onClick ={activeLink}>
                          {list.logo}  
                          <p>{list.name}</p>
                        </div>
                          
                      </NavLink>
                        
                     
                        
                        
                    ))}
                </div>
            </div>

            <main>
                <Outlet />
                
            </main>
        </div>
    )
}

export default SidebarAdmin
