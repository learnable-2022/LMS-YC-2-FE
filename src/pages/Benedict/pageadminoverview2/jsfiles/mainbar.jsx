import React from 'react';
import styles from '../styles/mainbar.module.css';
import { BsSearch, } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
function Mainbar() {
  return (
    <div className = {styles.mainbar}>
      <div className = {styles.mainheader}>
        <div className={styles.mainheadercnt}>
          <div className= {styles.admind}>
          Students
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
        <div className= {styles.mainoverview}>
          <div className= {styles.over}>
          Students overview
          </div>
         
          <div className= {styles.lessonoverview}>

            <div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Track</th>
                  <th>Email address</th>
                  <th></th>
                  <th>Option</th>
                </tr>
                <tr>
                  <td>Johnson James</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb1}>
                    <div className= {styles.tb1s1}>
                      <i><BiPencil/></i>
                      Edit
                    </div>
                    <div className= {styles.tb1s2}>
                      <i><IoStatsChart/></i>
                      Report
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>BUBU</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb2}>
                    <span className= {styles.tb2s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className= {styles.tb2s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Daniel</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb3}>
                    <span className= {styles.tb3s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className= {styles.tb3s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Henry James</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb4}>
                    <span className= {styles.tb4s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className= {styles.tb4s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Frank Grill</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb5}>
                    <span className={styles.tb5s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb5s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Kate</td>
                  <td></td>
                  <td></td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.page1}>
              1
            </div>
            <div className={styles.page2}>
              2
            </div>
            <div className={styles.page3}>
              3
            </div>
            <div className={styles.page4}>4</div>
            <div className={styles.page5}>
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainbar