import React from 'react';
import styles from '../styles/mainbar.module.css';
import { BsSearch } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import Pic from '../img/place1.png';
import Pic1 from '../img/Phone.png';
import Pic2 from '../img/place2.png';
function Mainbar() {
  return (
    <div className = {styles.mainbar}>
      <div className = {styles.mainheader}>
        <div className={styles.mainheadercnt}>
          <div className= {styles.admind}>
          Create New Lesson
          </div>
          <div className= {styles.search}>
        <input type="text" placeholder='Search'/>
        <i><BsSearch/></i>
        </div>
        <div className= {styles.S}>
          <div className= {styles.sbox}>
          <input type="text" placeholder='S'/>
          </div>
          <div className={styles.stev}>
            <span className={styles.steph}>Stephen O.</span> <br/>
            <span className={styles.adminis}>Administrator</span>
          </div>
        </div>
        </div>
      </div>
      <div className= {styles.mainbody}>
        <div className= {styles.mainnewlesson}>
        <img src={Pic} alt=""/>
        <div className={styles.letter1}>
          What is Product Design
          <i><FaPen/></i>
        </div>
        <div className={styles.letter2}>
          Product designers and user experience {'{UX}'} designers are similar- in fact
          sometimes the title are used interchangably, but sometimes they are not. Broadly speaking, 
          product designers tend to be more involved with the entirety of the design process of a product,
          while UX designers generally focuses specifically on refining the 
          user experience of a product.
          Ofcourse, job role can differ from company to company, some companies may
          expect their user designers to be heavily involved in bussiness processes,
          or their product design to work exclusively on design. 
        </div>
        <div className={styles.letter3}>
          Design Principles
        </div>
        <div className={styles.letter4}>
          Beyound the basic definition, scientist have identified several distinct types of reactivity.
          the following are some special example
        </div>
        <div className={styles.save}>
          <div className={styles.save1}>
            Save
          </div>
          <div className={styles.save2}>
            back to editor
          </div>
        </div>
        </div>
       <div className={styles.phone}>
       <div className={styles.phone1}>
        <img src={Pic1} alt=""/>
        <div className={styles.phoneprev}>
          Live Preview
        </div>
        </div>
        <div className={styles.phone2}>
        <img src={Pic2} alt=""/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Mainbar