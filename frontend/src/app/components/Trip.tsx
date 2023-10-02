interface TripProps {
  isBooked: boolean;
  creationDate: Date;
  deleteDate: Date;
  description: string;
}

const Trip = ({ isBooked, creationDate, deleteDate, description }:TripProps): JSX.Element => {
  const active = "bg-active border-activeBorder";
  const inactive = "bg-inactive border-inactiveBorder";
  
  return (
    <div className="flex flex-col w-72 justify-between gap-y-3.5 overflow-hidden shadow-xl bg-primary border-solid border-borderWidth rounded-container border-black">
      <p className="px-2.5 h-16 line-clamp-2 text-xl font-bold border-b-borderWidth border-b-black bg-title">
        {description}
      </p>
      <div className="p-2.5">
        <div className="grid grid-cols-2 gap-y-2.5">
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
          <span
            className={`w-20 border-borderWidth rounded-button text-center ${
              isBooked ? inactive : active
            }`}
          >
            {isBooked ? "booked" : "available"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Trip;
