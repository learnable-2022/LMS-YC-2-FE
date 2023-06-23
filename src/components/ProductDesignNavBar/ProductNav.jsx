import React, { useContext, useEffect, useState } from "react";
import Product from "./productNav.module.css";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LogoSvg, productArrow, productImage } from "../../assets";
import { MdKeyboardArrowRight } from "react-icons/md";
import AppContext from "../../context/Appcontext";
import { FaTimes} from "react-icons/fa"

const ProductNav = () => {
  const [open, setOpen] = useState(true);
  const [activeWeek, setActiveWeek] = useState()
  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const {showCourseNav, setShowCourseNav, studentInfo} = useContext(AppContext)

  const weeks = [
    {
      week: "Week 1",
      id: 1
    },
    {
      week: "Week 2",
      id: 2
    },
    {
      week: "Week 3",
      id: 3
    },
    {
      week: "Week 4",
      id: 4
    },
  ]
  
  useEffect(() => {
    weeks.forEach((week, index) => {
      if(location.pathname.endsWith((week.id))){
        setActiveLink(week.id)
      }
    })
    console.log(location)
  })
  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  const courseLinks = [ "Dashboard"]

  const DropDown = () => {
    setOpen(!open);
  };
  return (
    <div className={Product.Cont}>
      <nav className = {`${Product.nav} ${showCourseNav ? Product.active : ""}`}>
        <div className={Product.logo}>
          <div className= {Product.close} onClick = {() => setShowCourseNav(false)}>
            <FaTimes />
          </div>
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
                <NavLink to= {`/student/course/${studentInfo.track}/${index + 1}`} key = {index} className = {`${Product.linko} ${activeLink == week.id ? Product.active : ""}`} onClick={() => handleLinkClick(week.id)}>
                  <div></div>
                  <p>{week.week}</p>
                </NavLink>
            ))}
          </div>
          <ul className={Product.list}>
            {courseLinks.map((link, index) => (
              // <>
                <li key = {index}>
                  <NavLink to="/student/dashboard" className= {Product.listLink}>{link}</NavLink>
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
