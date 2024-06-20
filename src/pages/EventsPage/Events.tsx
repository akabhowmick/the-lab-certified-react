import "./Events.css";
export const Events = () => {
  return (
    <>
      <div className="pageTitle">
        <h1>Private Training Session 1</h1>
        <p id="tagLine">
          <em>WARNING!!</em>
        </p>
        <p id="lifeLine">
          <em>SIGNING UP TO THE LAB WILL CHANGE YOUR LIFE!!</em>
        </p>
        <button className="Purchase">Come Get That Work!!</button>
      </div>
      <br />
      <img
        src="./Event Assets/Ball on Court.jpg"
        alt="Background with Schedule"
        className="picked"
      />
      <h2>Location</h2>
      <address>
        4707 WEST LOOP 289
        <br />
        Lubbock, TX 79414
      </address>
      <div className="disclaimer">
        <h4>About the Session</h4>
        <p>
          <em>*Sessions are tailored to player experience and weaknesses.</em>
        </p>
      </div>
      <h4>Tickets</h4>
      <div></div>
      <h4>Total</h4>
      <button>Checkout</button>
      <h4>Share This Event!</h4>
      <a href="#">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
    </>
  );
};
