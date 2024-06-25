import { Program } from "../../types/interfaces";

export const ProgramCard = ({ program }: { program: Program }) => {
  const { coach, tagline, description, formattedPrice, numberOfSessions, image } = program;

  const sessionsText = (numberOfSessions: number) => {
    return numberOfSessions === 1 ? "1 Month Subscription" : `${numberOfSessions} sessions`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img src={image === "" ? "src/assets/logo.png" : image} alt="program-pic" />
          <div className="px-4 py-3 w-72">
            <div className="border-b">
              <p className="text-lg font-bold text-black truncate block capitalize whitespace-normal">
                {coach} -{" "}
                <span className="text-sm font-semibold text-gray-500">
                  {sessionsText(numberOfSessions)}
                </span>
              </p>
            </div>
            <div className="flex-col items-center ">
              <div className="border-b">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  <span className="text-green-500">&#10003;</span> {formattedPrice} -{" "}
                  <span className="text-sm font-semibold text-gray-500 cursor-auto my-3">
                    {description}
                  </span>
                </p>
              </div>

              <p className="text-sm border-b p-2 font-semibold text-gray-500">
                &#10024; {"  "}
                {tagline} &#10024;
              </p>
              <div className="ml-auto">
                <button className="bg-red-500 p-2 mt-2 text-lg font-semibold text-white rounded-lg">
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
