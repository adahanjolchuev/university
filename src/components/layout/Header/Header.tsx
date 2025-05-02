import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import scss from "./Header.module.scss";
import images from "../../../../public/images.jpg";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.topbar}>
        <div className={scss.search}>
          <FiSearch size={20} />
          <input className={scss.input} type="text" placeholder="Search..." />
        </div>

        <div className={scss.logo}>
          <Image src={images} alt="Logo" width={50} height={50} className={scss.logoimg} />
          <div className={scss.logotext}>
            <h1 className={scss.h1}>Бат МУ</h1>
            <p className={scss.p}>Middle School</p>
          </div>
        </div>

        <div className={scss.useractions}>
          <Link href="/login" className={scss.loginlink}>
            <FaUserCircle size={24} />
            <span>Log In</span>
          </Link>
          <div className={scss.socialicons}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <nav className={scss.bottomnav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/news">News</Link>
        <Link href="/events">Events</Link>
        <Link href="/students">Students</Link>
        <Link href="/parents">Parents</Link>
        <Link href="/admissions">Admissions</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
