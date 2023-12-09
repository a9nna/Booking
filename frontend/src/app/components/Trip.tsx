import React from "react";
import { DeleteBin } from "../../../public/assets";

interface TripProps {
  id: string;
  isBooked: boolean;
  creationDate: Date;
  deleteDate: Date;
  description: string;
  // eslint-disable-next-line no-unused-vars
  onClickBin: (tripId: string) => void;
}

const Trip = ({
  id,
  isBooked,
  creationDate,
  deleteDate,
  description,
  onClickBin,
}: TripProps): React.ReactElement => {
  return (
    <div className="grid justify-items-center items-center w-[350px] h-[300px] overflow-hidden shadow-xl rounded-container bg-gradient-to-b from-blue-600 via-purple-600 to-fuchsia-600">
      <p className="px-2.5 h-[60px] line-clamp-2 overflow-hidden text-xl text-white font-bold ">
        {description}
      </p>
      <div className="grid gap-y-4 p-4 w-[98%] h-[98%] bg-white">
        <div className="grid grid-cols-2 gap-y-4">
          <span className="font-bold">Date of creation:</span>
          <span>
            {new Date(creationDate).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="font-bold">Date of delete:</span>
          <span>
            {deleteDate &&
              new Date(deleteDate).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
          </span>
          <div className="flex items-center justify-center w-[90px] h-[50px] rounded-button bg-gradient-to-b from-blue-600 via-purple-600 to-fuchsia-600">
            <span className="flex items-center justify-center w-[95%] h-[95%] rounded-button bg-white">
              {isBooked ? "booked" : "available"}
            </span>
          </div>
        </div>
        <div className="flex">
          <DeleteBin
            height={45}
            className="hover:cursor-pointer bg-gradient-to-br from-purple-500 focus:from-purple-700 to-cyan-400 rounded-full focus:to-cyan-600"
            onClick={() => onClickBin(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Trip;
