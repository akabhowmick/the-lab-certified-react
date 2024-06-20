export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Dribbling Workshop",
    description: "Improve your dribbling skills with our intensive workshop.",
    date: "2024-07-01",
    location: "Main Gym",
  },
  {
    id: 2,
    title: "Shooting Camp",
    description: "Join our shooting camp to enhance your shooting accuracy.",
    date: "2024-07-10",
    location: "East Court",
  },
  {
    id: 3,
    title: "Defense Drills",
    description: "Learn the best defensive moves with our expert coaches.",
    date: "2024-07-20",
    location: "West Court",
  },
];
