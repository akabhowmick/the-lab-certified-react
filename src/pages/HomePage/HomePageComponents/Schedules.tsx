export const Schedules = () => {
  return (
    <section id="schedules" className="schedule">
      <div className="showcase">
        <video
          autoPlay
          loop
          muted
          poster="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/poster.webp"
          role="none"
        >
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/demo.mp4"
            type="video/mp4"
          />
        </video>
        <img
          src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/rhythm.png"
          alt="Rhythm"
        />
      </div>
    </section>
  );
};

export default Schedules;
