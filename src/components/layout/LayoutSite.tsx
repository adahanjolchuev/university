import React, { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface ILayoutSite {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSite> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
