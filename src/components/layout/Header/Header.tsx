import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import scss from "./Header.module.scss";
import images from "../../../../public/images.jpg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.topbar}>
        <div className={scss.logo}>
          <Image src={images} alt="Logo" width={50} height={50} className={scss.logoimg} />
          <div className={scss.logotext}>
            <h1 className={scss.h1}>Бат МУ</h1>
            <h4 className={scss.p}>Университет</h4>
          </div>
        </div>
<div className={scss.adress}>
  <h4 >batmu@gmail.com</h4>
  <h4> <span><FaPhone /></span> 0552 10-21-79</h4>
  <h4><span><FaLocationDot /> пр. Чынгыз Айтматова</span></h4>

</div>
        <div className={scss.useractions}>
       
          <div className={scss.socialicons}>
          <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaFacebookF />

          </div>
        </div>
      </div>

      <nav className={scss.bottomnav}>
        <Link href="/">Университет</Link>
        <Link href="/about">AVN</Link>
        <Link href="/news">Жанылыктар</Link>
        <Link href="/events">Билим берүү</Link>
        <Link href="/students">Окуялар</Link>
        <Link href="/admissions">Кабыл алуу</Link>
        <Link href="/admissions">Бүтүрүүчүлөр</Link>
        <Link href="/contact">Байланыш</Link>
      </nav>
    </header>
  );
};

export default Header;
