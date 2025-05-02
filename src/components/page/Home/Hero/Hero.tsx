import React from "react";
import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={scss.hero}>
      <div className={"container"}>
        <div className={scss.content}>
          <div className={scss.block_text}>
            <h1>Back to School</h1>
            <h3>Welcome to all of our students</h3>
            <button>Discover</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
