import { Logo, lowerFrameImg, medalGoldIcon, upperFrameImg } from '../../../assets';
import styles from "./studentCertificate.module.css"
import Certificate from '../../../components/Certificate/Certificate';
import WalletBtn from '../../../components/WalletBtn/WalletBtn';
import UserDashboardNav from '../../../components/UserDashboardNav/UserDashboardNav';
import { useContext } from 'react';
import AppContext from '../../../context/Appcontext';


function StudentCertificate() {
  const { walletConnected } = useContext(AppContext)

  return (
    <div>
        <UserDashboardNav navTitle = "Certification" />
        <div className= {styles.certificateContainer}>
            <h2>Great Job</h2>
            <p>You have earned your certificate</p>
            <Certificate />
            <WalletBtn />

            <button disabled = {!walletConnected} className = {styles.claimReward}>Claim Reward</button>
        </div>
        
    </div>
  )
}

export default StudentCertificate
