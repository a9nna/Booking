interface TripProps {
  isBooked: boolean;
  creationDate: Date;
  deleteDate: Date;
  description: string;
}

const Trip = ({ isBooked, creationDate, deleteDate, description }:TripProps): JSX.Element => {
  const active = "bg-active border-activeBorder";
  const inactive = "";
  
  return (
    <div className="flex flex-col w-72 h-fit gap-y-3.5 p-2.5 shadow-xl bg-background rounded-container">
      <p>{description}</p>
      <div className="grid grid-cols-2">
        <span className="font-bold text-secondary">Date of creation:</span>
        <span>
          {new Date(creationDate).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span className="font-bold text-secondary">Date of delete:</span>
        <span>
          {new Date(deleteDate).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <span
        className={`w-20 border-borderWidth rounded-button text-center ${
          isBooked ? active : inactive
        }`}
      >
        {isBooked ? "booked" : "available"}
      </span>
    </div>
  );
};

export default Trip;
