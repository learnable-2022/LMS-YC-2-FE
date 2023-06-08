import React from "react";
import Error from "./error.module.css";
import { NavLink } from "react-router-dom";
import { ErrorImage } from "../../assets";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back to the previous page
  };
  return (
    <div>
      <div className={Error.wrapper}>
        <h1>Oops!</h1>
        <img src={ErrorImage} alt="error" onClick={goBack} />
        <p>
          Oops! The page you're looking for couldn't be found. Sorry, we're
          experiencing a 404 error
        </p>
        <NavLink to="/">Go to homepage</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
