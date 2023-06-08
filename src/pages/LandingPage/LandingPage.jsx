import styles from "./landingPage.module.css";
import {
  HeroImg,
  Logo,
  PlayBtn,
  Feature1,
  Feature2,
  Feature4,
  Feature5,
  Feature6,
  Course1,
  Course2,
  Course3,
  Course5,
  Course6,
  Course7,
  Course8,
  Course9,
  CourseCurve1,
  CourseCurve2,
  CourseCurve3,
  TestimonialImg1,
  TestimonialImg2,
  TestimonialCurve1,
  TestimonialCurve2,
  ArrowDown,
  ArrowUp,
  UpcomingBatch,
  Enroll,
  MenuBurger,
} from "../../assets";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);

  return (
    <div className={styles.landingPageContainer}>

      {/* ----------------------------------------------------------------NAVBARR SECTION--------------------------------------------------- */}
      <nav className={styles.nav}>
        {/* <img src={MenuBurger} alt="" id={styles.burger} /> */}
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.navLinks}>
          <NavLink to = "#contact" className = {styles.contactLink}>Contact Us</NavLink>
          <NavLink to="/signup" className = {styles.loginLink} className = {styles.enrolLink}>Enrol Now</NavLink>
        </div>
      </nav>

      {/* -------------------------------------------------------------HERO SECTION----------------------------------- */}
      <section className={styles.heroContainer}>
        <div className={styles.heroContents}>
          <h1>Let's make learning easy for the younger ones</h1>

          <p>
          Discover, Learn, and Play: Unleash your learning adventure! Explore captivating courses, interactive activities, and unlock your full potential with us!"
          </p>
          <div className= {styles.heroLinks}>
            <NavLink to = "/signup">Enrol Now</NavLink>
            <NavLink>View Courses</NavLink>
          </div>
          <div className={styles.users}>
            <div>
              <p id={styles.userNo}>400k+</p>
              <p id={styles.user}>Registered tutors</p>
            </div>
            <div>
              <p id={styles.userNo}>1,000k+</p>
              <p id={styles.user}>Students onboard</p>
            </div>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src={HeroImg} alt="" />
        </div>
      </section>

      {/* ----------------------------------------------------------FEATURES------------------------------------------ */}
      <section className={styles.featuresContainer}>
        <h2>Features</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureImg}>
              <img src={Feature1} alt="" />
            </div>
            <h4 className={styles.featureTitle}>Gamified Learning</h4>
            <p id={styles.abtFeature}>
              Our gamified learning content transforms education into exciting
              adventures. Explore captivating worlds, solve puzzles, and embark
              on quests to unlock new levels and achievements.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImg}>
              <img src={Feature2} alt="" />
            </div>
            <h4 className={styles.featureTitle}>Student Management</h4>
            <p id={styles.abtFeature}>
              Stay organized and on top of your students' progress with our
              student management features. Track their progress, answer their
              questions and give feedback.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImg}>
              <img src={Feature1} alt="" />
            </div>
            <h4 className={styles.featureTitle}>Interactive Quizzes</h4>
            <p id={styles.abtFeature}>
              We test our students understanding with interactive quizzes and
              assessments. Create multiple choice, true/false, and
              fill-in-the-blank questions.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImg}>
              <img src={Feature4} alt="" />
            </div>
            <h4 className={styles.featureTitle}>
              Technological Streamlined Courses
            </h4>
            <p id={styles.abtFeature}>
              Easily upload and host your video lectures, ensuring that your
              students have a seamless learning experience. No need for external
              hosting platforms.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImg}>
              <img src={Feature5} alt="" />
            </div>
            <h4 className={styles.featureTitle}>Parental involvment</h4>
            <p id={styles.abtFeature}>
              We believe that learning is a collaborative effort between parents
              and educators. Our platform provides resources and tools to keep
              parents informed and involved in their child's learning journey
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImg}>
              <img src={Feature6} alt="" />
            </div>
            <h4 className={styles.featureTitle}>Community Forum</h4>
            <p id={styles.abtFeature}>
              Join our community of educators and learners, and share your
              knowledge and experience. Our forum is a place for discussion and
              support.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------FEATURED COURSES---------------------------------------------------------- */}
      <section className={styles.featuredCoursesContainer}>
        <h2>Featured Courses</h2>

        <div className={styles.featuredCourses}>
          <div className={styles.featuredCourse}>
            <h3>Science</h3>
            <img src={CourseCurve1} alt="" />
            <img src={Course1} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>{`Engineering & Tech`}</h3>
            <img src={CourseCurve2} alt="" />
            <img src={Course2} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>Robotics</h3>
            <img src={CourseCurve3} alt="" />
            <img src={Course3} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>Product Design</h3>
            <img src={CourseCurve2} alt="" />
            <img src={Course2} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>English Language</h3>
            <img src={CourseCurve3} alt="" />
            <img src={Course5} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>Web design</h3>
            <img src={CourseCurve1} alt="" />
            <img src={Course6} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>Arts and Design</h3>
            <img src={CourseCurve3} alt="" />
            <img src={Course7} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>Languages </h3>
            <img src={CourseCurve1} alt="" />
            <img src={Course8} alt="" />
          </div>
          <div className={styles.featuredCourse}>
            <h3>Maths</h3>
            <img src={CourseCurve2} alt="" />
            <img src={Course9} alt="" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------TESTIMONIAL SECTION--------------------------------------------------------------------------------- */}
      <section className={styles.testimonialContainer}>
        <h2>Discover Solutions to meet every learning goal</h2>

        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContents}>
              <p className={styles.name}>Mr Kelvin</p>
              <p className={styles.role}>Tutor</p>
              <p className={styles.testimony}>
                "Students are engaged, learning new tools, exposed to a variety
                of resources, and having fun while they learn." — Mr kelvin ,
                product design tutor
              </p>
            </div>
            <img src={TestimonialImg1} id={styles.testimonialImg} />
          </div>
          <div className={styles.testimonial}>
            <img src={TestimonialImg2} id={styles.testimonialImg} />
            <div className={styles.testimonialContents}>
              <p className={styles.name}>Averie williams</p>
              <p className={styles.role}>Tutor</p>
              <p className={styles.testimony}>
                “…my students [have] the opportunity to explore scientific
                concepts through real-world applications while actionable
                diagnostics allow me to track [their] mastery” — Averie williams
              </p>
            </div>
          </div>
        </div>

        <img src={TestimonialCurve1} alt="" />
        <img src={TestimonialCurve2} alt="" />
      </section>

      {/* ------------------------------------------------------------UPCOMING BATCH SECTION------------------------------------------------------- */}
      <section className={styles.upcomingBatchContainer}>
        <img src={UpcomingBatch} alt="" />
        <div className={styles.upcomingBatchContents}>
          <h2>Don't miss out on Learn.z's upcoming batch!</h2>
          <p>
            The program starts on January 16th 2023 and is open to all who are
            willing to learn new skills and benefit from them. Once we receive
            your application, we‘ll send an email to you to determine if the
            program is the right fit for you and discuss how we can help you
            achieve your career goals.
          </p>
          <div className={styles.upcomingBatchBtns}>
            <button>Contact Us</button>
            <button>
              Enroll Now
              <img src={Enroll} alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------FAQs---------------------------------------------------- */}
      <section className={styles.faqsContainer}>
        <div className={styles.faqHeading}>
          <h2>Frequently Asked Question</h2>
          <p>
            Find answers to your questions and get the information you need to
            make the most of our platform.
          </p>
        </div>

        <div className={styles.questions}>
          <div className={styles.question_answer}>
            <div className={styles.question}>
              <p>What type of Courses can I create and upload</p>
              <div
                className={styles.showAnswer}
                onClick={() => setShowAnswer1(!showAnswer1)}
              >
                {showAnswer1 && <img src={ArrowUp} alt="" />}
                {!showAnswer1 && <img src={ArrowDown} alt="" />}
              </div>
            </div>

            <p className={`${styles.answer} ${!showAnswer1 && styles.none}`}>
              You can create courses on variety of topics and fields, from
              business and technology to personal development and creative arts.
              All courses only need to abide by our Code of Conduct and Policy
              of Use.
            </p>
          </div>

          <div className={styles.question_answer}>
            <div className={styles.question}>
              <p>What type of Courses can I create and upload</p>
              <div
                className={styles.showAnswer}
                onClick={() => setShowAnswer2(!showAnswer2)}
              >
                {showAnswer2 && <img src={ArrowUp} alt="" />}
                {!showAnswer2 && <img src={ArrowDown} alt="" />}
              </div>
            </div>

            <p className={`${styles.answer} ${!showAnswer2 && styles.none}`}>
              You can create courses on variety of topics and fields, from
              business and technology to personal development and creative arts.
              All courses only need to abide by our Code of Conduct and Policy
              of Use.
            </p>
          </div>

          <div className={styles.question_answer}>
            <div className={styles.question}>
              <p>What type of Courses can I create and upload</p>
              <div
                className={styles.showAnswer}
                onClick={() => setShowAnswer3(!showAnswer3)}
              >
                {showAnswer3 && <img src={ArrowUp} alt="" />}
                {!showAnswer3 && <img src={ArrowDown} alt="" />}
              </div>
            </div>

            <p className={`${styles.answer} ${!showAnswer3 && styles.none}`}>
              You can create courses on variety of topics and fields, from
              business and technology to personal development and creative arts.
              All courses only need to abide by our Code of Conduct and Policy
              of Use.
            </p>
          </div>
          <div className={styles.question_answer}>
            <div className={styles.question}>
              <p>What type of Courses can I create and upload</p>
              <div
                className={styles.showAnswer}
                onClick={() => setShowAnswer4(!showAnswer4)}
              >
                {showAnswer4 && <img src={ArrowUp} alt="" />}
                {!showAnswer4 && <img src={ArrowDown} alt="" />}
              </div>
            </div>

            <p className={`${styles.answer} ${!showAnswer4 && styles.none}`}>
              You can create courses on variety of topics and fields, from
              business and technology to personal development and creative arts.
              All courses only need to abide by our Code of Conduct and Policy
              of Use.
            </p>
          </div>
        </div>

        <div id = {styles.contact} className={styles.support}>
          <h3>Couldn't find what you were looking for?</h3>
          <p>
            Our support team is just an email away and ready to help you out
          </p>
          <button>Contact our Support team</button>
        </div>
      </section>

      {/* -----------------------------------------------------------------LEARNING REASON----------------------------------------- */}
      <section>
        <div className={styles.reasonContainer}>
          <h2>Why Learn with Learn.z</h2>
          <p>
            We have trained hundreds of students through our courses and
            internship, We are an AI focused company with global recognition.
            Best of all, we just want to give you the best start to your Data
            Science career
          </p>

          <div className={styles.reasons}>
            <div className={styles.reason}>
              <p>Live classes</p>
              <p>Access video recordings</p>
              <p>Fun learning</p>
              <p>Gear up your Resume</p>
            </div>
            <div className={styles.reason}>
              <p>Hands-on Course</p>
              <p>Mentorship from Data Science Experts</p>
              <p>Makes your career ready</p>
            </div>
            <div className={styles.reason}>
              <p>Interview Support</p>
              <p>Internship Opportunities</p>
              <p>6 real world projects</p>
            </div>
            <div className={styles.reason}>
              <p>8 hours a day Slack support</p>
              <p>Build a job worthy Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------FOOTER SECTION-------------------------------------- */}
      <Footer />
    </div>
  );
}

export default LandingPage;
