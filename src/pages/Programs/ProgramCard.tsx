import { Program } from "../../types/interfaces";

export const ProgramCard = ({ program }: { program: Program }) => {
  const { coach, tagline, description, formattedPrice, numberOfSessions, image } = program;
  return (
    <div>
      {" "}
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img src={image === "" ? "src/assets/logo.png" : image} alt="program-pic" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">{coach}</p>
            <p className="text-sm font-semibold text-gray-500">{tagline}</p>
            <div className="flex-col items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">{formattedPrice}</p>
              <p className="text-md font-semibold text-black cursor-auto my-3">{description}</p>
              <p className="text-sm font-semibold text-gray-500">{numberOfSessions} sessions</p>
              <div className="ml-auto">
                <button className="bg-red-500 p-2">Book Now!</button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
