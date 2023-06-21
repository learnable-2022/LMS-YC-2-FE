import { Logo, lowerFrameImg, medalGoldIcon, upperFrameImg } from '../../../assets';
import styles from "./studentCertificate.module.css"
import Certificate from '../../../components/Certificate/Certificate';
import WalletBtn from '../../../components/WalletBtn/WalletBtn';
import UserDashboardNav from '../../../components/UserDashboardNav/UserDashboardNav';
import { useContext, useState } from 'react';
import AppContext from '../../../context/Appcontext';
import Modal from '../../../components/Modal/Modal';


function StudentCertificate() {
  const { walletConnected, walletAddress, studentInfo, showModal, setShowModal } = useContext(AppContext)
  const [ loading, setLoading ] = useState(false)
  const [data, setData] = useState()
  

  const claimReward = () => {

    const dataBody = {
      name: studentInfo.child_name,
      course: studentInfo.course,
      walletAddress: walletAddress,
    }

    setLoading(true)
      const response = fetch("https://learnznfts.onrender.com/api/v1/claimCertificate", {
        method: "POST",
        body : JSON.stringify(dataBody),
        headers : {
          "Content-Type" : "application/json"
        }
        
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLoading(false)
        setShowModal(true)
        console.log(walletAddress)
        data.link !== null && data.link !== undefined ? setData(data) : "" 
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        console.log(walletAddress, studentInfo.child_name, studentInfo.course)
      })
  }

  return (
    <div className = {`${styles.container} ${showModal ? styles.noOverflow : ""} `}>
        <UserDashboardNav navTitle = "Certification" />
        {showModal && <div className= {styles.overlay}></div>}

        <div className= {styles.certificateContainer}>
            <h2>Great Job</h2>
            <p>You have earned your certificate</p>
            <Certificate />
            <WalletBtn />

            <button disabled = {!walletConnected} className = {styles.claimReward} onClick = {claimReward}>
              {!loading && "Claim Reward"}
              {loading && "Loading..."}
            </button>
        </div>
        {showModal && (
            <Modal>
              {data && (
                <p className = {styles.blockchainLink}>Click to <a href= {`${data.link}`} target = "_blank">here</a> to view on blockchain</p>
              )}
            </Modal>
          )}
        
    </div>
  )
}

export default StudentCertificate
