import React, { useState } from "react";
import Product from "./productNav.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { LogoSvg, productArrow, productImage } from "../../assets";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductNav = () => {
  const [open, setOpen] = useState(true);

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
          <p>Foundation of user experience (UX) design</p>
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
            <NavLink to="" className={Product.linko}>
              <div></div>
              <p>Week 1</p>
            </NavLink>
            <NavLink to="" className={Product.linko}>
              <div></div>
              <p>Week 2</p>
            </NavLink>
            <NavLink to="" className={Product.linko}>
              <div></div>
              <p>Week 3</p>
            </NavLink>
            <NavLink to="" className={Product.linko}>
              <div></div>
              <p>Week 4</p>
            </NavLink>
          </div>
          <ul className={Product.list}>
            <li>
              <NavLink to="">Grades</NavLink>
            </li>
            <li>
              <NavLink to="">Notes</NavLink>
            </li>
            <li>
              <NavLink to="">Discussion forums</NavLink>
            </li>
            <li>
              <NavLink to="">Messages</NavLink>
            </li>
            <li>
              <NavLink to="">Resources</NavLink>
            </li>
            <li>
              <NavLink to="">Course info</NavLink>
            </li>
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
