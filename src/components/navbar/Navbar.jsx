import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assests/logo/logo.png"
import { Fade } from "react-reveal";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setToggle(false);
  };

  return (
    <>
      <Fade  duration={1500}>
        <nav className="navbar">
          <div className="navbar_imgBox">
            <img src={logo} alt="logo"/>
          </div>
          <div className="navbar_navLinks">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
               
              </li>
              <li>
                <Link to={"/about"}>About</Link>
                
              </li>
              <li>
                <Link to={"/attraction"}>Attractions</Link>
                
              </li>
              <li>
                <Link to={"/contactUs"}>Contact</Link>
                
              </li>
            </ul>
          </div>
          <Fade right cascade duration={500}>
            <div className="navbar_menu">
              {toggle ? (
                <CgClose
                  fontSize={27}
                  color="#ffffff"
                  onClick={handleToggle}
                />
              ) : (
                <CgMenu
                  fontSize={27}
                  color="#ffffff"
                  onClick={handleToggle}
                />
              )}

              {toggle && (
                <div className="navbar_menu_navLinks">
                  <ul>
                  <li>
                <Link to={"/"}>Home</Link>
               
              </li>
              <li>
                <Link to={"/about"}>About</Link>
                
              </li>
              <li>
                <Link to={"/attraction"}>Attractions</Link>
                
              </li>
              <li>
                <Link to={"/contactUs"}>Contact</Link>
                
              </li>
                  </ul>
                </div>
              )}
            </div>
          </Fade>
        </nav>
      </Fade>
    </>
  );
};

export default Navbar;
