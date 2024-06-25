import "./Testimonials.css";
export const Successes = () => {
  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Our Successes</div>
        <div
          id="testimonial4"
          className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  className="img-circle img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.{" "}
                </p>
                <h4>Client 1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


