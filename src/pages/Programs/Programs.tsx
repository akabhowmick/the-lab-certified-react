import { ProgramCard } from "./ProgramCard";
import { groupProgramList, privateProgramList } from "./ProgramList";
import "./Programs.css";

export const Programs = () => {
  return (
    <div className="p-8 bg-gray-300">
      <h2 className="text-black p-4">View Our Programs</h2>
      <h3 className="text-black p-4">Group Clinics (1 - Hour)</h3>
      {groupProgramList.map((program, index) => {
        return <ProgramCard key={index} program={program} />;
      })}
      <h3 className="text-black p-4">Private Lessons</h3>
      {privateProgramList.map((program, index) => {
        return <ProgramCard key={index} program={program} />;
      })}
    </div>
  );
};
