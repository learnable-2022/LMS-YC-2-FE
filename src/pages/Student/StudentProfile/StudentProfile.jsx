import { useContext, useEffect } from "react";
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import AppContext from "../../../context/Appcontext";
import styles from "./studentProfile.module.css";
import { ProfileEdit } from "../../../assets";

function StudentProfile() {
  const { studentInfo } = useContext(AppContext);

  const childDOB = new Date(studentInfo.DOB);

  useEffect(() => {
    console.log(studentInfo);
  });
  return (
    <div className={styles.container}>
      <UserDashboardNav navTitle="Profile" />

      <div className={styles.ProfileBody}>
        <h2>Personal information</h2>
        <div className={styles.cont}>
          <div className={styles.cont1}>
            <div className={styles.pic}></div>
            <p>{studentInfo.child_name}</p>
          </div>
          <div>
            <img src={ProfileEdit} alt="" />
          </div>
        </div>
        <p>
          <span> Student Name :</span> <span>{studentInfo.child_name}</span>
        </p>
        <p>
          <span> Gender :</span> <span>{studentInfo.gender}</span>
        </p>
        <p>
          <span>Email :</span> <span>{studentInfo.email}</span>
        </p>
        <p>
          <span>Student DOB :</span> <span>{studentInfo.DOB}</span>
        </p>
        <p>
          <span>Parent Name :</span> <span>{studentInfo.parent_name}</span>
        </p>
        <p>
          <span>Parent Relations :</span>{" "}
          <span>{studentInfo.relationship}</span>
        </p>
        <p>
          <span>Path :</span>{" "}
          <span>
            {" "}
            {studentInfo.track == null ||
            studentInfo.track == undefined ||
            studentInfo.track == "NULL "
              ? ""
              : studentInfo.track}
          </span>
        </p>
      </div>
    </div>
  );
}

export default StudentProfile;
