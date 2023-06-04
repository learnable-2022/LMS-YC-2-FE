import React from "react";
import Product from "./productNav.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { LogoSvg, productArrow, productImage } from "../../assets";

const ProductNav = () => {
  return (
    <div className={Product.Cont}>
      <nav>
        <div className={Product.logo}>
          <img src={LogoSvg} alt="" />
          <h3>Learn.Z</h3>
        </div>
        <div className={Product.wrap}>
          <p>Foundation of user experience (UX) design</p>
          <div className={Product.Log}>
            <img src={productImage} alt="" />
          </div>

          <div className={Product.drop}>
            <img src={productArrow} alt="" />
            <p>Course Material</p>
          </div>
          <div className={Product.linky}>
            <NavLink to="" className={Product.linko}>
              <input type="radio" />
              <p>Week 1</p>
            </NavLink>
            <NavLink to="" className={Product.linko}>
              <input type="radio" />
              <p>Week 2</p>
            </NavLink>
            <NavLink to="" className={Product.linko}>
              <input type="radio" />
              <p>Week 3</p>
            </NavLink>
            <NavLink to="" className={Product.linko}>
              <input type="radio" />
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
