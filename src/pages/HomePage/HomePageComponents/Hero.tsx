import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home">
      <div className="hero">
        <div className="visual">
          <picture>
            <source
              srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/hero.webp"
              type="image/avif"
              media="(width > 1024px)"
            />
            <source
              srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/hero-mobile.avif"
              type="image/avif"
            />
            <source
              srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/hero.webp"
              media="(width > 1024px)"
              type="image/webp"
            />
            <img
              src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/hero-mobile.webp"
              alt="fitness"
            />
          </picture>
        </div>
        <div className="content">
          <h1 className="text-white text-8xl">Good Morning Champ</h1>
          <div className="wrapper">
            <a href="#discover" className="LinkButton Primary">
              {" "}
              DISCOVER MORE{" "}
            </a>
          </div>
        </div>
      </div>
      <div id="discover" className="fold">
        <div className="subject">
          <p>
            It's a new day,{" "}
            <span style={{ color: "var(--brand-1)" }}>
              a new opportunity to sculpt the best version of yourself. Embrace the energy,
            </span>
            feel the burn, and conquer your fitness goals with unwavering determination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
