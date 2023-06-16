import styles from "./createLesson.module.css";
import { ExtraResourceImg, PenIcon, TripleDotsIcon } from '../../../assets';
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import { useContext, useEffect, useState } from "react";
import AdminDashboardNav from "../../../components/AdminDashboardNav/AdminDashboardNav";
import AppContext from "../../../context/Appcontext";

function EmptyStatePage() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [week, setWeek] = useState("")
    const [path,setPath] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const [previewUrl, setPreviewUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const {adminToken} = useContext(AppContext)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        


        if(file) {
            const reader = new FileReader()

            reader.onload = (e) => {
                setPreviewUrl(e.target.result)
            }

            reader.readAsDataURL(file)
            setSelectedFile(file)
        }
    }
    const uploadLesson = (e) => {
        e.preventDefault();

        setLoading(true)

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", desc);
        formData.append("week", week);
        formData.append("track", path);
        formData.append("file", selectedFile);


        const response = fetch("https://learnz.onrender.com/api/v1/admin/courses", {
            method : "POST",
            body : formData,
            headers : {
                "Authorization": `Bearer ${adminToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setLoading(false)
            data.success ? setTitle("") : ""
            data.success ? setDesc("") : ""
            data.success ? setWeek("") : ""
            data.success ? setSelectedFile("") : ""
            data.success ? setPath("") : ""
        })
        .catch(err => console.log(err))
    }

  return (

    <div className={styles.container}>
        <AdminDashboardNav  navTitle = "Create Lesson" />
        <div className={styles.box}>
            <div className={styles.mainSection}>
                <div className={styles.mainSectionLeft}>
                    <form onSubmit = {uploadLesson} encType = "multipart/form-data">
                        <div className={styles.lesson}>
                            <h3>Lesson Title <img src={PenIcon} alt="" /> </h3>
                            <p>Add the title of your course. Keep it clear and interesting for your learners.</p>

                            <div className= {styles.inputGroup}>
                                <input 
                                    type= "text"
                                    name = "title"   
                                    placeholder= "Add Title" 
                                    value = {title} 
                                    onChange = {(e) => setTitle(e.target.value)} 
                                    required
                                />
                            </div>
                            
                        </div>
                        <div className={styles.lesson}>
                            <h3>Lesson Description <img src={PenIcon} alt="" /> </h3>
                            <p>Add the description of your course. Keep it clear and interesting for your learners.</p>

                            <div className= {styles.inputGroup}>
                                <input 
                                    type= "text"  
                                    name ="description" 
                                    placeholder= "Add Description" 
                                    value = {desc} 
                                    onChange = {(e) => setDesc(e.target.value)} 
                                    required
                                />
                            </div>
                            
                        </div>

                        <div className= {styles.videoGroup}>
                            <h3>Lesson video</h3>
                            <div className={styles.videoBox}>
                                <div className= {styles.videoCont}>
                                    <div className={styles.videoPic}>
                                    {previewUrl && (
                                        <video controls>
                                            <source src = {previewUrl} type = "video/*" />
                                        </video>
                                    ) }
                                    </div>

                                    <div className={styles.text}>
                                        <p>click the Add button to upload a video.</p>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <input 
                                            type= "file" className={styles.save} 
                                            name = "file"
                                            accept = "video/*" 
                                            onChange = {handleFileChange} 
                                            placeholder= "Add a video"
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.lesson}>
                            <h3>Lesson week</h3>
                            <p>What lesson week is it for the student.</p>

                            <select name = "week" value = {week} onChange = {(e) => setWeek(e.target.value)}>
                                <option value = "" disabled>Select week</option>
                                <option value= "1">Week 1</option>
                                <option value="2">Week 2</option>
                                <option value="3">Week 3</option>
                                <option value="4">Week 4</option>
                            </select>
                        </div>

                        <div className={styles.lesson}>
                            <h3>Lesson Path</h3>
                            <p>What path is this lesson for is it for the student.</p>

                            <select name="track" value = {path} onChange = {(e) => setPath(e.target.value)}>
                                <option value = "" disabled>Select Path</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="web3">Web3</option>
                                <option value="product design">Product Design</option>
                            </select>
                        </div>

                        <button type = "submit" className = {styles.uploadBtn}>
                            {!loading && "Upload Lesson"}
                            {loading && "Loading"}
                        </button>

                    </form>
                    
                </div>

                <div className={styles.mainSectionRight}>
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
                            <p>Resources</p>
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



                         

    </div>
  )
}

export default EmptyStatePage
