import { ProgramCard } from "./ProgramCard";
import { groupProgramList, privateProgramList } from "./ProgramList";
import "./Programs.css";

export const Programs = () => {
  return (
    <div className="bg-gray-300">
      <h1 className="font-bold text-4xl mb-4 text-black p-8 underline mx-auto text-center">
        View Our Programs
      </h1>
      <h3 className="text-black mx-auto p-10 text-center text-3xl">Group Clinics (1 - Hour)</h3>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {groupProgramList.map((program, index) => {
          return <ProgramCard key={index} program={program} />;
        })}
      </div>
      <h3 className="text-black mx-auto p-10 text-center text-3xl">Private Lessons</h3>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {privateProgramList.map((program, index) => {
          return <ProgramCard key={index} program={program} />;
        })}
      </div>
    </div>
  );
};
