import styles from "./landingPage.module.css"
import { HeroImg, LandingPageLogo, PlayBtn, Feature1, Feature2, Feature4, Feature5, Feature6, Course1, Course2, Course3,Course5,
Course6, Course7, Course8, Course9, CourseCurve1, CourseCurve2, CourseCurve3} from "../../assets"
import Footer from "../../components/footer/Footer"


function LandingPage() {
    return (
        <div className = {styles.landingPageContainer} >
            <nav className = {styles.nav}>
                <div className= {styles.logo}>
                    <img src= {LandingPageLogo} alt=""/>
                </div>
                <div className={styles.navLinks}>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Course</p>
                    <p>About</p>
                </div>

                <div className= {styles.login}>
                    <p>Log in</p>
                    <button>Start free trial</button>
                </div>
            </nav>

            {/* -------------------------------------------------------------HERO SECTION----------------------------------- */}
            <section className = {styles.heroContainer}>
                <div className= {styles.heroContents}>
                    <h1>Let's make learning easy for the younger ones</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsa magnam dolor laboriosam architecto, doloremque repellendus voluptate tempore ea praesentium!</p>
                    <button disabled>
                        <img src= {PlayBtn} alt=""/>
                        <p>See how it works</p> 
                    
                    </button>
                    <div className= {styles.users}>
                        <div>
                            <p id = {styles.userNo}>400k+</p> 
                            <p id = {styles.user}>Registered tutors</p>
                        </div>
                        <div>
                            <p id = {styles.userNo}>1,000k+</p>
                            <p id = {styles.user}>Students onboard</p>   
                        </div>
                    </div>
                </div>
                <div className= {styles.heroImg}>
                    <img src= {HeroImg} alt=""/>
                </div>
            </section>

            {/* ----------------------------------------------------------FEATURES------------------------------------------ */}
            <section className = {styles.featuresContainer}>
                <h2>Features</h2>
                <div className= {styles.features}>
                    <div className= {styles.feature}>
                        <div className= {styles.featureImg}>
                            <img src= {Feature1} alt=""/>
                        </div>
                        <h4 className = {styles.featureTitle}>Gamified Learning</h4>
                        <p id = {styles.abtFeature}>Our gamified learning content transforms education into exciting adventures. Explore captivating worlds, solve puzzles, and embark on quests to unlock new levels and achievements.</p>
                    </div>
                    <div className= {styles.feature}>
                        <div className= {styles.featureImg}>
                            <img src= {Feature2} alt=""/>
                        </div>
                        <h4 className = {styles.featureTitle}>Student Management</h4>
                        <p id = {styles.abtFeature}>Stay organized and on top of your students' progress with our student management features. Track their progress, answer their questions and give feedback.</p>
                    </div>
                    <div className= {styles.feature}>
                        <div className= {styles.featureImg}>
                            <img src= {Feature1} alt=""/>
                        </div>
                        <h4 className = {styles.featureTitle}>Interactive Quizzes</h4>
                        <p id = {styles.abtFeature}>We test our students understanding with interactive quizzes and assessments. Create multiple choice, true/false, and fill-in-the-blank questions.</p>
                    </div>
                    <div className= {styles.feature}>
                        <div className= {styles.featureImg}>
                            <img src= {Feature4} alt=""/>
                        </div>
                        <h4 className = {styles.featureTitle}>Technological Streamlined Courses</h4>
                        <p id = {styles.abtFeature}>Easily upload and host your video lectures, ensuring that your students have a seamless learning experience. No need for external hosting platforms.</p>
                    </div>
                    <div className= {styles.feature}>
                        <div className= {styles.featureImg}>
                            <img src= {Feature5} alt=""/>
                        </div>
                        <h4 className = {styles.featureTitle}>Gamified Learning</h4>
                        <p id = {styles.abtFeature}>We believe that learning is a collaborative effort between parents and educators. Our platform provides resources and tools to keep parents informed and involved in their child's learning journey</p>
                    </div>
                    <div className= {styles.feature}>
                        <div className= {styles.featureImg}>
                            <img src= {Feature6} alt=""/>
                        </div>
                        <h4 className = {styles.featureTitle}>Gamified Learning</h4>
                        <p id = {styles.abtFeature}>Join our community of educators and learners, and share your knowledge and experience. Our forum is a place for discussion and support.</p>
                    </div>
                </div>
            </section>

            {/* ----------------------------------------------------------------FEATURED COURSES---------------------------------------------------------- */}
            <section className = {styles.featuredCoursesContainer}>
                <h2>Featured Courses</h2>

                <div className= {styles.featuredCourses}>
                    <div className={styles.featuredCourse}>
                        <h3>Science</h3>
                        <img src= {CourseCurve1} alt=""/>
                        <img src= {Course1} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>{`Engineering & Tech`}</h3>
                        <img src= {CourseCurve2} alt=""/>
                        <img src= {Course2} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>Robotics</h3>
                        <img src= {CourseCurve3} alt=""/>
                        <img src= {Course3} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>Product Design</h3>
                        <img src= {CourseCurve2} alt=""/>
                        <img src= {Course2} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>English Language</h3>
                        <img src= {CourseCurve3} alt=""/>
                        <img src= {Course5} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>Web design</h3>
                        <img src= {CourseCurve1} alt=""/>
                        <img src= {Course6} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>Arts and Design</h3>
                        <img src= {CourseCurve3} alt=""/>
                        <img src= {Course7} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>Languages </h3>
                        <img src= {CourseCurve1} alt=""/>
                        <img src= {Course8} alt=""/>
                    </div>
                    <div className={styles.featuredCourse}>
                        <h3>Maths</h3>
                        <img src= {CourseCurve2} alt=""/>
                        <img src= {Course9} alt=""/>
                    </div>
                </div>
                
            </section>

            <section className = {styles.testimonialContainer}>
                <h2>Discover Solutions to meet every learning goal</h2>
                
            </section>

            <Footer />
        </div>
    )
}

export default LandingPage
