import "rsuite/dist/rsuite.min.css";
import { Calendar } from "rsuite";

export const InPersonTraining = () => {
  return (
    <div
      className="training-container WeekPicker"
      style={{
        display: "block",
        width: 600,
        paddingLeft: 30,
      }}
    >
      <h4>React Suite Calendar Component</h4>
      <Calendar />
    </div>
  );
};
