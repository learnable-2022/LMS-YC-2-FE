import styles from "./studentAssignments.module.css"
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import { WelcomeGirl, DashboardEllipse, View} from "../../../assets"
import Card from "../../../components/Card/Card"
import { useContext, useEffect, useState } from "react";
import quizQuestions from "./Quiz";
import AppContext from "../../../context/Appcontext";

function StudentAssignments() {
    const {studentInfo} = useContext(AppContext)
    const [selectedOptions, setSelectedOptions] = useState({})
    const [correctOption, setCorrectOption] = useState({})
    const [score, setScore] = useState()

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

    }

    useEffect(() => {
        
        let updatedScore = 0;
        for (const questionId in correctOption) {
          if (selectedOptions[questionId] === correctOption[questionId]) {
            updatedScore += 1;
          }
        }
        setScore(updatedScore);
      }, [correctOption, selectedOptions]);

    console.log(selectedOptions)
    console.log(correctOption)
    console.log(score)
    return (
        <div>
            <UserDashboardNav  navTitle = "Assignments"/>
            <div className = {styles.assignmentCont}>
                <div className={styles.heroPart}>
                    <div className={styles.welcomeUserContainer}>
                        <div className={styles.welcomeUser}>
                            <div className={styles.welcomeUserContents}>
                                <h2>{`Welcome`}</h2>
                                <p>
                                You have all the resources you need for learning right here
                                with you! Make sure to always do your assignments and read
                                your courses. have fun!
                                </p>
                            </div>
                            <img src={WelcomeGirl} alt="" />
                        </div>
                        <img src={DashboardEllipse} alt="" />
                    </div>

                    <div className= {styles.topStudents}>
                        <Card bgColor = "white">
                            <h3>Top Students</h3>
                        </Card>
                    </div> 
          
                </div>
            </div>

            {studentInfo.track.trim() == null ? (
            <div className= {styles.noAssignment}>
                <img src= {View} alt=""/>
                <p>No Quiz yet. Complete Course and get quiz to course</p>
            </div>
            ) : (
                quizQuestions.map((quiz, index1) => (
                    quiz.path.toLowerCase() === studentInfo.track.toLowerCase() ? (
                        <form key = {index1} onSubmit = {submitQuiz}>
                            <p>Quiz {quiz.path}</p>
                            {quiz.questions.map((question, index2) => (
                                <div key = {index2}>
                                    <h3>Question {index2 + 1}: </h3>
                                    <p>{question.question}</p>
                                    {question.options.map((option, index3) => (
                                        <div key = {index3}>
                                            <input 
                                                type = "radio"
                                                value = {option.value} 
                                                name = {index2} 
                                                onChange = {handleOptionChange}
                                            />
                                            <label>{option.option}</label>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <button type = "submit">Submit</button>
                        </form>
                    ) : ""
                ))
            ) }

        </div>
    )
}

export default StudentAssignments
