import { useEffect, useState } from "react";
import { getSeasonsData } from "../utils/api";
import { SeasonDetailSchema } from "../types/types";
import { extractingSeasonsDetails } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";

export const useGetSeasonsID = () => {
  const [seasonsID, setSeasonsID] = useState<SeasonDetailSchema[]>([]);

  const callForSeasonsData = () => {
    getSeasonsData()
      .then(checkError)
      .then((response) => {
        const result = extractingSeasonsDetails(response.seasons);
        setSeasonsID(result);
      });
  };
  const checkError = (response: Response) => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };

  useEffect((): void => {
    callForSeasonsData();
  }, []);

  return { seasonsDetails: seasonsID };
};
