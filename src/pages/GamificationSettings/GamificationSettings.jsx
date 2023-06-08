import styles from "./gamificationSettings.module.css";
import { ArrowDownIcon, BackIcon, PenIcon, PlaceholderImg, TripleDotsIcon } from '../../assets';



function GamificationSettings() {
  return (
    <div className={styles.container}>

        <div className={styles.box}>
            <div className={styles.sidebar}>
                

            </div>

            <div className={styles.navigation}>
                <div className={styles.navbar}>
                    <div className={styles.leftside}>
                        <p>Create new lesson</p>
                    </div>
                    

                    <div className={styles.rightside}>
                        <div className={styles.input}>
                            <input type="text" placeholder="Search" />
                        </div>
                        

                        <div className={styles.profile}>
                            <div className={styles.profileIcon}>
                                <h1>S</h1>
                            </div>

                            <div className={styles.profileName}>
                                <p>Steven O.</p>
                                <p><span>Administrator</span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.back}>
                    <div className={styles.backIcon}>
                        <img src={BackIcon} alt="" />
                    </div>

                    <div className={styles.backName}>
                        <p>Back</p>
                    </div>
                </div>
                
            </div>

        </div>




        <div className={styles.main}>
            <div className={styles.mainLeft}>
                <div className={styles.upperSection}>
                    <div className={styles.image}>
                        <img src={PlaceholderImg} alt="" />
                    </div>

                    <div className={styles.reactivityText}>
                        <h3>Reactivity <img src={PenIcon} alt="" /> </h3>
                        <p>This is a module on reactivity, please read through 
                            the lessons and to answer the quiz    <img src={PenIcon} alt="" /> 
                        </p>
                    </div>
                </div>

                
                <div className={styles.listItems}>
                    <ul>
                        <li>Add <img src={ArrowDownIcon} alt="" /> </li>
                        <li>Rearrange</li>
                        <li className={styles.specialList}>Gamification</li>
                    </ul>
                </div>


                <div className={styles.gamification}>
                    <div>
                        <h1>Gamification</h1>

                        <div className={styles.point}>
                            <div>
                                <p>Points</p>
                            </div>
                            
                            <div className={styles.pointButton}>
                                <div>
                                    <p>ON</p>
                                </div>

                                <div>
                                    <p className={styles.specialList}></p>
                                </div>
                            </div>
                        </div>
                    


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Each login gives</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Points</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Each Module completion gives</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Points</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Each Lesson completion gives</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Points</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Each successful test completion gives</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Points</p>
                        </div>
                    </div>





                    <div>
                        <div className={styles.point}>
                            <div>
                                <p>Badges</p>
                            </div>
                                
                            <div className={styles.pointButton}>
                                <div>
                                    <p>ON</p>
                                </div>

                                <div>
                                    <p className={styles.specialList}></p>
                                </div>
                            </div>
                        </div>
                        

                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Activity badges (4, 8, 16, 32, 64, 128, 256, 512 logins)</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Learning badges (1, 2, 4, 8, 16, 32, 64, 128 completed modules)</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Test badges (2, 4, 8, 16, 32, 64, 128, 256 passed tests)</p>
                        </div>
                    </div>





                    <div>
                        <div className={styles.point}>
                            <div>
                                <p>Levels</p>
                            </div>
                                    
                            <div className={styles.pointButton}>
                                <div>
                                    <p>ON</p>
                                </div>

                                <div>
                                    <p className={styles.specialList}></p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Upgrade level every</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Points</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Upgrade level every</p>
                            <p className={styles.numb}>5</p>
                            <p className={styles.pointNumb}>Completed lessons</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Upgrade level every</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Badges</p>
                        </div>
                    </div>







                    <div>
                        <div className={styles.point}>
                            <div>
                                <p>Reward</p>
                            </div>
                                    
                            <div className={styles.pointButton}>
                                <div>
                                    <p>ON</p>
                                </div>

                                <div>
                                    <p className={styles.specialList}></p>
                                </div>
                            </div>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" className={styles.checkbox} name="" />
                            <p>XP</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Completed Modules</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>XP</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Completed Lesson</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Gems</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Completed Module</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Unique Gems</p>
                            <p className={styles.numb}>10</p>
                            <p className={styles.pointNumb}>Completed Lesson</p>
                        </div>
                    </div>






                    <div>
                        <div className={styles.point}>
                            <div>
                                <p>Leaderboard</p>
                            </div>
                                    
                            <div className={styles.pointButton}>
                                <div>
                                    <p>ON</p>
                                </div>

                                <div>
                                    <p className={styles.specialList}></p>
                                </div>
                            </div>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Show levels</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Show points</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Show badges</p>
                        </div>


                        <div className={styles.pointText}>
                            <input type="checkbox" name="checkbox" />
                            <p>Show lessons</p>
                        </div>
                    </div>






                    <div className={styles.lowerSection}>
                        <div className={styles.button}>
                            <div  className={styles.button}>
                                <button className={styles.save}>Save</button>
                            </div>

                            <div  className={styles.button}>
                                <button className={styles.cancel}>Cancel</button>
                            </div>
                        </div>

                        <div className={styles.reset}>
                            <button>Reset to default</button>
                        </div>
                    </div>


                </div>

            </div>




            <div className={styles.mainRight}>
                <div className={styles.boxModel}>
                    <div className={styles.boxList}>
                        <p>Lesson</p>
                        <img src={TripleDotsIcon} alt="" />
                    </div>
                    <h3>0</h3>
                </div>
           
                <div className={styles.boxModel}>
                    <div className={styles.boxList}>
                        <p>Students and progress</p>
                        <img src={TripleDotsIcon} alt="" />
                    </div>
                    <h3>0</h3>
                </div>

                <div className={styles.boxModel}>
                    <div className={styles.boxList}>
                        <p>Files</p>
                        <img src={TripleDotsIcon} alt="" />
                    </div>
                    <h3>0</h3>
                </div>

                <div className={styles.boxReport}>
                    <div className={styles.boxList}>
                        <p>Report</p>
                        <img src={TripleDotsIcon} alt="" />
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default GamificationSettings

