import "./Services.css";
import { CustomCalendar } from "./Calendar";
import { basketballBackground } from "../../utils/pictureInfo";

export const Services = () => {
  return (
    <div className="training-container WeekPicker bg-gray-300">
      <div className="container">
        <div className="hero">
          <div className="visual">
            <picture>
              <source srcSet={basketballBackground} type="image/avif" media="(width > 1024px)" />
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
            <h1 className="text-white text-3xl">Train with me at the The Lab Certified.</h1>
          </div>
        </div>
      </div>
      <div className="p-10 mx-auto">
        <CustomCalendar />
      </div>
    </div>
  );
};
