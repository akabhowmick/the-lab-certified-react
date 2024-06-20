import React from "react";

const weeklySchedule = [
  { day: "Monday", activity: "Exercise 1", time: "6:00 AM" },
  { day: "Tuesday", activity: "Exercise 1", time: "7:00 AM" },
  { day: "Wednesday", activity: "Exercise 1", time: "6:30 AM" },
  { day: "Thursday", activity: "Exercise 1", time: "6:00 AM" },
  { day: "Friday", activity: "Exercise 1", time: "8:00 AM" },
];

const exerciseDurations = [
  { exercise: "Running", duration: "30 min" },
  { exercise: "Ball Handling", duration: "45 min" },
  { exercise: "3 on 3", duration: "60 min" },
  { exercise: "Shooting drills", duration: "40 min" },
  { exercise: "5 on 5", duration: "50 min" },
];

const Schedules: React.FC = () => {
  const weeklyScheduleTableEntries = weeklySchedule.map(({ day, activity, time }) => {
    return (
      <tr key={day}>
        <td>{day}</td>
        <td>{activity}</td>
        <td>{time}</td>
      </tr>
    );
  });

  const exerciseDurationsTableEntries = exerciseDurations.map(({ exercise, duration }) => {
    return (
      <tr key={exercise}>
        <td>{exercise}</td>
        <td>{duration}</td>
      </tr>
    );
  });

  return (
    <section id="schedules" className="schedule">
      <div className="subject">
        <div className="container">
          <div className="table-wrapper">
            <h2>Weekly Schedule</h2>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Scheduled Exercise</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>{weeklyScheduleTableEntries}</tbody>
            </table>
          </div>
          <div className="table-wrapper">
            <h2>Skill Exercises</h2>
            <table>
              <thead>
                <tr>
                  <th>Drills</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{exerciseDurationsTableEntries}</tbody>
            </table>
          </div>
        </div>
      </div>
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
