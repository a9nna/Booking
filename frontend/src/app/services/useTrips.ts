import { useCallback, useState } from "react";
import { Trip } from "@/app/types";

export const useTrips = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [trips, setTrips] = useState<Trip[] | null>(null);

  const getTrips = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.API_TEST}${process.env.API_PATH}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const tripsReceived = await response.json();

      setTrips(tripsReceived.trips);
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  }, []);

  const deleteTrips = useCallback(async (BoookingID: string) => {
    try {
      const response = await fetch(
        `${process.env.API_TEST}${process.env.API_PATH}/${BoookingID}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  }, []);

  return { getTrips, trips, errorMessage, deleteTrips };
};
