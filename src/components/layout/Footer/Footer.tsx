import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={scss.footer}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo_footer}>LOGO</div>
            <div className={scss.navigation_footer}>
              <h3>QUICK NAVIGATION</h3>
              <nav>
                <a href="#">About</a>
                <a href="#">News</a>
                <a href="#">Students</a>
                <a href="#">Parents</a>
              </nav>
            </div>
            <div className={scss.socials}>
              <h3>STAY CONNECTED</h3>
              <nav>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">Youtube</a>
              </nav>
            </div>
            <div className={scss.address}>
              <h3>GET IN TOUCH</h3>
              <nav>
                <a href="#">Adress</a>
                <a href="#">Tel: 123-456-7890</a>
                <a href="#">info@mysite.com</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <center className={scss.center}>
        <h3>© 2025 by ADAHAN JOLCHEUEV.</h3>
      </center>
    </>
  );
};

export default Footer;
