import style from "./Navbar.module.scss";
import logo from "@/assets/Navbar/logo.png";
import user from "@/assets/Navbar/user.svg";
import heart from "@/assets/Navbar/heart.svg";
import search from "@/assets/Navbar/search.svg";
import basket from "@/assets/Navbar/basket.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const dropdownRef = useRef(null); 

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = (type) => {
    setModalType(type);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate("/auth");
  };

  const goToProfile = () => {
    navigate("/profile");
    setIsDropdownOpen(false);
  };

  const goToAuth = () => {
    navigate("/auth");
    setIsDropdownOpen(false);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.logoSection}>
        <img src={logo} alt="logo" />
        <h1 className={style.logo}>Furniro</h1>
      </div>
      <FontAwesomeIcon
        className={style.hamburger}
        onClick={toggleMenu}
        icon={isMenuOpen ? faTimes : faBars}
      />
      <ul className={`${style.navLinks} ${isMenuOpen ? style.show : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <ul className={style.icons}>
        <li ref={dropdownRef} style={{ position: "relative" }}>
          <button onClick={toggleDropdown}>
            <img src={user} alt="user" />
          </button>
          {isDropdownOpen && (
            <div className={style.dropdown} ref={dropdownRef}>
              {!isLoggedIn ? (
                <>
                  <button onClick={() => navigate("/profile")}>Profile</button>
                  <hr className={style.divider} />
                  <button onClick={() => navigate("/auth")}>Get Started</button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate("/profile")}>Profile</button>
                  <hr className={style.divider} />
                  <button onClick={handleLogout}>Logout</button>
                </>
              )}
            </div>
          )}

        </li>
        <li>
          <button onClick={toggleSearch}>
            <img src={search} alt="search" />
          </button>
        </li>
        <li>
          <button onClick={() => toggleModal("favorites")}>
            <img src={heart} alt="heart" />
          </button>
        </li>
        <li>
          <button onClick={() => toggleModal("shop")}>
            <img src={basket} alt="basket" />
          </button>
        </li>
      </ul>

      {isSearchOpen && (
        <div className={style.searchContainer}>
          <input type="text" placeholder="Search..." />
        </div>
      )}
      {isModalOpen && <Modal type={modalType} closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
