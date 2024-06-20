import React from "react";

const activityDescriptions = [
  {
    activity: "Personal Bests",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      "Duis aute irure dolor in reprehenderit in voluptate velit",
    ],
  },
  {
    activity: "Challenges",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      "Duis aute irure dolor in reprehenderit in voluptate velit",
    ],
  },
  {
    activity: "Friends Activity",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      "Duis aute irure dolor in reprehenderit in voluptate velit",
    ],
  },
];

const Plans: React.FC = () => {
  const cardInfo = activityDescriptions.map(({ activity, descriptions }) => {
    return (
      <a key={activity} href="#" className="Card">
        <i className="ri-trophy-line"></i>
        <div>
          <h2>{activity}</h2>
          <ul>
            {descriptions.map((description) => {
              return <li key={description}>{description}</li>;
            })}
          </ul>
        </div>
      </a>
    );
  });

  return (
    <section id="plans" className="cards">
      <div className="subject">
      <h2 className="plans-subheader">Why Choose Us?</h2>
        <div className="container">
         
          {cardInfo}
        </div>
      </div>
    </section>
  );
};

export default Plans;
