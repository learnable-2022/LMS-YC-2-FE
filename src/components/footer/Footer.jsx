import React from 'react'
import Foot from './Footercss.module.css'
import { Call, Facebook, Instagram, Linkedln, SMS, Twitter, YellowLogo } from '../../assets'

const Footer = () => {
  return (
    <div className={Foot.wrapper}>
        <div className={Foot.cont}>
                <div>
                    <img src={YellowLogo} alt="" />
                </div>
                <div>
                    <h3>Company</h3>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Privacy & Policy</a></li>
                    <li><a href="">Partners</a></li>
                </div>
                <div>
                    <h3>Product</h3>
                    <li><a href="">Overview</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Releases</a></li>
                    <li><a href="">Dashboards</a></li>
                </div>
                <div>
                <h3>Resources</h3>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Bulletin</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Tutorials</a></li>
                </div>
                <div>
                   <h3>Contact Us</h3> 
                   <div className={Foot.flex}>
                    <img src={SMS} alt="" />
                   <p>contact <br />@Learnz.com</p>
                   </div>
                   <div className={Foot.flex}>
                    <img src={Call} alt="" />
                   <p>+12372828292</p>
                   </div>
                    <div style={{paddingTop: '30px'}}>
                        <p>Follow us on Social Media</p>
                        <div className={Foot.flex}>
                            <img src={Linkedln} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Instagram} alt="" />
                            <img src={Facebook} alt="" />
                        </div>
                    </div>

            </div>
        </div>
        <p className={Foot.para}>© 2023 LEARN.Z</p>
    </div>
  )
}

export default Footer













