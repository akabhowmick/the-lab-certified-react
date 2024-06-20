import "./InPersonTraining.css";
import Calendar from "reactjs-availability-calendar";

export const InPersonTraining = () => {
  const bookings = [
    {
      from: new Date("2022-07-03"),
      to: new Date("2022-07-30"),
      middayCheckout: true,
    },
    {
      from: "2022-04-08",
      to: "2022-04-13",
      middayCheckout: true,
    },
    {
      from: "2022-09-03T19:20:35.593Z",
      to: "2022-09-22T19:20:35.593Z",
      middayCheckout: false,
    },
  ];

  return <Calendar bookings={bookings} />;
};
