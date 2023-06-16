import React from "react";
import Loader from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={Loader.wrappy}>
      <span className={Loader.loader}></span>
    </div>
  );
};

export default MyLoader;
