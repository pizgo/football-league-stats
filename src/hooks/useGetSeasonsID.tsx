import { useEffect, useState } from "react";
import { getSeasonsData } from "../utils/api";
import { SeasonDetailSchema } from "../types/types";
import { extractingSeasonsDetails } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";

export const useGetSeasonsID = () => {
  const [seasonsIDDetails, setSeasonsIDDetails] = useState<SeasonDetailSchema[]>([]);

  const timeOutToMeetQpsQuota = 1001

  const callForSeasonsData = () => {
    getSeasonsData()
      .then(checkError)
      .then((response) => {
        const result = extractingSeasonsDetails(response.seasons);
        setSeasonsIDDetails(result);
      });
  };
  const checkError = (response: Response) => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };

  useEffect((): (() => void) => {
    const timer = setTimeout(() => {
      callForSeasonsData();
    }, timeOutToMeetQpsQuota);
    return () => clearTimeout(timer);
  }, []);


  return { seasonsDetails: seasonsIDDetails};
};
