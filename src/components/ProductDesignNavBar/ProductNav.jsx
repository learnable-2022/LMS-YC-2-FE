import React, { useContext, useState } from "react";
import Product from "./productNav.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { LogoSvg, productArrow, productImage } from "../../assets";
import { MdKeyboardArrowRight } from "react-icons/md";
import AppContext from "../../context/Appcontext";

const ProductNav = () => {
  const [open, setOpen] = useState(true);
  const {studentInfo} = useContext(AppContext)

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"]
  const [activeWeek, setActiveWeek] = useState()

  const courseLinks = ["Grades", "Notes", "Discussion Forums", "Quiz", "Resources", "Course Info", "Dashboard"]

  const DropDown = () => {
    setOpen(!open);
  };
  return (
    <div className={Product.Cont}>
      <nav className = {Product.nav}>
        <div className={Product.logo}>
          <img src={LogoSvg} alt="" />
          <h3>Learn.Z</h3>
        </div>
        <div className={Product.wrap}>
          <p>{studentInfo.course}</p>
          <div className={Product.Log}>
            <img src={productImage} alt="" />
          </div>

          <div className={Product.drop} onClick={DropDown}>
            <div>
              {open ? (
                <img src={productArrow} alt="" />
              ) : (
                <MdKeyboardArrowRight
                  style={{ fontSize: "25px", color: "#292D32" }}
                />
              )}
            </div>
            <p>Course Material</p>
          </div>
          <div
            className={Product.linky}
            style={{ display: open ? "block" : "none" }}
          >
            {weeks.map((week, index) => (
                <NavLink to= {`/student/course/${studentInfo.track}/${index + 1}`} key = {index} className = {Product.linko}>
                  <div></div>
                  <p>{week}</p>
                </NavLink>
            ))}
          </div>
          <ul className={Product.list}>
            {courseLinks.map((link, index) => (
              // <>
                <li key = {index}>
                  <NavLink to="">{link}</NavLink>
                </li>
              // </>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProductNav;
