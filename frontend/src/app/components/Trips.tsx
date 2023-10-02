import { useEffect, useState } from "react";
import { useTrips } from "@/app/services/useTrips";
import Trip from "@/app/components/Trip";

const Trips = ():JSX.Element => {
  const { getTrips, trips } = useTrips();
  
  useEffect(() => {
    getTrips();
  },[getTrips]);

  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-10">
      {trips !== null &&
        trips.map((trip, position) => (
          <Trip
            isBooked={trip.status}
            creationDate={trip.createdAt}
            deleteDate={trip.deletedAt}
            description={trip.description}
            key={position}
          />
        ))}
    </div>
  );
}

export default Trips;
