import styles from "./userDashboardNav.module.css"
import { SearchIcon } from "../../assets"

function UserDashboardNav() {
    return (
        <div>
            <div className= {styles.searchBg}>
                <div className= {styles.searchInput}>
                    <img src= {SearchIcon} alt=""/>
                    <input type="search" name="" id="" placeholder = "Search"/>
                </div>
                    
            </div>
        </div>
    )
}

export default UserDashboardNav
