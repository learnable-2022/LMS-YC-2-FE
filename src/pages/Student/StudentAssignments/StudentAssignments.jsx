import styles from "./studentAssignments.module.css"
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import { WelcomeGirl, BoyStudying, DashboardEllipse, View} from "../../../assets"
import Card from "../../../components/Card/Card"
import { useContext, useEffect, useState } from "react";
import quizQuestions from "./Quiz";
import AppContext from "../../../context/Appcontext";
import ScoreModal from "./ScoreModal/ScoreModal";

function StudentAssignments() {
    const {studentInfo, progress, totalVideos, quizScore, setQuizScore, studentToken, scorePercentage, setScorePercentage, showScoreModal, setShowScoreModal } = useContext(AppContext)
    const [selectedOptions, setSelectedOptions] = useState({})
    const [correctOption, setCorrectOption] = useState({})
    const [fullName, setFullName] = useState(studentInfo.child_name)
    const [firstName, setFirstName] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(false)
 
   const getFirstName = () => {
    if(fullName !== undefined && fullName !== null){
      const words = fullName.split(" ")

    if(words.length >= 2){
      setFirstName(words.shift())

      const lastName = words.join()
    }else{
      setFirstName(fullName)
    }

    }
  }
  useEffect(() => {
    getFirstName()
  }, [])


    const handleOptionChange = (e) => {
        // setSelectedOption([...selectedOption], e.target.value)
        const questionId = e.target.name
        const optionValue = e.target.value
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [questionId]: optionValue
        }))
    }

    const submitQuiz = (e) => {
        e.preventDefault()

        quizQuestions.map((quiz, index) => {
            if(quiz.path.toLowerCase() === studentInfo.track.toLowerCase()){
                quiz.questions.map((question, index) => {
                    setCorrectOption((prevCorrectOptions) => ({
                        ...prevCorrectOptions,
                        [index] : question.correctOption
                    }))
                })
            }

        })
        setBtnDisabled(true)
        setShowScoreModal(true)

    }

    console.log(scorePercentage)

    useEffect(() => {
        
        let updatedScore = quizScore;
        for (const questionId in correctOption) {
          if (selectedOptions[questionId] === correctOption[questionId]) {
            updatedScore += 1;
          }
        }
        setQuizScore(updatedScore);

        quizQuestions.map((quiz, index) => {
           setScorePercentage((quizScore/ quiz.questions.length) * 100)
        })
      }, [correctOption, selectedOptions]);

    const updateScore = () => {
        const updatedData = {
            quiz: quizScore
        }

        const response = fetch(`https://learnz.onrender.com/api/v1/user/${studentInfo._id}`, {
            method : "PATCH",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${studentToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            window.localStorage.setItem("student-status", JSON.stringify(data.updated.filter((student, id) => student._id == studentInfo._id)[0]))
            // setLoading(false)
            return data;
            
        })
        .catch((err) => {
            console.log(err)
            // setLoading(false)
        })
    }

    useEffect(() => {
        updateScore()
    }, [quizScore])
    return (
        <div className = {`${styles.container} ${showScoreModal ? styles.noOverflow : "" }`}>
            <UserDashboardNav  navTitle = "Assignments"/>
            {showScoreModal && <div className= {styles.overlay}></div>}
            <div className = {styles.assignmentCont}>
                <div className={styles.heroPart}>
                    <div className={styles.welcomeUserContainer}>
                        <div className={styles.welcomeUser}>
                            <div className={styles.welcomeUserContents}>
                                <h2>{`Welcome ${firstName}`}</h2>
                                <p>
                                You have all the resources you need for learning right here
                                with you! Make sure to always do your assignments and read
                                your courses. have fun!
                                </p>
                            </div>
                            <img src={studentInfo.gender.toLowerCase() == "female" ? WelcomeGirl : BoyStudying} alt="" />
                        </div>
                        <img src={DashboardEllipse} alt="" />
                    </div>

                    <div className= {styles.topStudents}>
                        <Card bgColor = "white">
                            <h3>Top Students</h3>
                        </Card>
                    </div> 
          
                </div>

                {progress !== null && progress !== undefined && totalVideos !== null && totalVideos !== undefined && progress/totalVideos == 1 && studentInfo.track.trim() !== "NULL" ? 
                (
                    quizQuestions.map((quiz, index1) => (
                        quiz.path.toLowerCase() === studentInfo.track.toLowerCase() ? (
                            <form key = {index1} onSubmit = {submitQuiz}>
                                <p className= {styles.pathQuiz}>{quiz.path} Quiz</p>
                                {quiz.questions.map((question, index2) => (
                                    <div key = {index2} className = {styles.questionCont}>
                                        <h4 className = {styles.questionNo}>Question {index2 + 1}:</h4>
                                        <p className = {styles.question}>{question.question}</p>
                                        {question.options.map((option, index3) => (
                                            <div key = {index3} className = {styles.option}>
                                                <input 
                                                    type = "radio"
                                                    value = {option.value} 
                                                    name = {index2} 
                                                    onChange = {handleOptionChange}
                                                    required
                                                />
                                                <label>{option.option}</label>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                <button type = "submit" className = {styles.submitQuiz}  disabled = {quizScore != 0 ? true : false }>Submit</button>

                                {quizScore !==0 ? (
                                    <button type = "button" onClick = {() => setShowScoreModal(true)} className = {styles.viewScore}>View Score</button>
                                ) : ""}
                            </form>
                        ) : ""
                    ))
                ) : (
                    <div className= {styles.noAssignment}>
                        <img src= {View} alt=""/>
                        <p>No Quiz yet. Complete Course and get quiz to course</p>
                    </div>
            )}
            </div>

            
            {showScoreModal && (
                <ScoreModal />
            )}
        </div>
    )
}

export default StudentAssignments
