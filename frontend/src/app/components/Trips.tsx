import React, { useCallback, useEffect } from "react";
import { useTrips } from "@/app/services/useTrips";
import Trip from "@/app/components/Trip";

const Trips = (): React.ReactElement => {
  const { getTrips, trips, deleteTrips } = useTrips();
  const handleDeleteTrip = useCallback(
    async (id: string) => {
      if (id !== "") {
        await deleteTrips(id);
        await getTrips();
      }
    },
    [deleteTrips, getTrips]
  );

  useEffect(() => {
    handleDeleteTrip("");
  }, [handleDeleteTrip]);

  useEffect(() => {
    getTrips();
  }, [getTrips]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10">
      {trips !== null &&
        trips.map((trip, position) => (
          <Trip
            id={trip.id}
            isBooked={trip.status}
            creationDate={trip.createdAt}
            deleteDate={trip.deletedAt}
            description={trip.description}
            onClickBin={handleDeleteTrip}
            key={position}
          />
        ))}
    </div>
  );
};

export default Trips;
