import style from "./Navbar.module.scss";
import logo from "@/assets/Navbar/logo.png"
import user from "@/assets/Navbar/user.svg"
import heart from "@/assets/Navbar/heart.svg"
import search from "@/assets/Navbar/search.svg"
import basket from "@/assets/Navbar/basket.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.logoSection}>
        <img  src={logo} alt="logo" />
        <h1 className={style.logo}>Furniro</h1>
      </div>
      
        <FontAwesomeIcon className={style.hamburger} onClick={toggleMenu} icon={isMenuOpen ? faTimes : faBars} />

      <ul className={`${style.navLinks} ${isMenuOpen ? style.show : ""}`}>

        <li ><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <ul className={style.icons}>
        <li><img src={user} alt="user" /></li>
        <li><img src={search} alt="search" /></li>
        <li><img src={heart} alt="heart" /></li>
        <li><img src={basket} alt="basket" /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
