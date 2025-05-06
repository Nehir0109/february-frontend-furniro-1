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

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const toggleModal = (type) => {
    setModalType(type);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={style.navbar}>
      {" "}
      <ul className={`${style.nav} ${isMenuOpen ? style.show : style.hide}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className={style.logoSection}>
        <img src={logo} alt="logo" />
        <h1 className={style.logo}>Furniro</h1>
      </div>
      <FontAwesomeIcon
        className={style.hamburger}
        onClick={toggleMenu}
        icon={isMenuOpen ? faTimes : faBars}
      />
      <ul className={`${style.navLinks} `}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <ul className={style.icons}>
        <li>
          <button onClick={goToProfile}>
            <img src={user} alt="user" />
          </button>
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
