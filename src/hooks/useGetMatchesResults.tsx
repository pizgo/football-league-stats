import { useEffect, useState } from "react";
import { APIKey, getSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";
import { MatchDetails } from "../types/types";

export const useGetMatchesResults = (initialSeasonID: string) => {
  const [matchesState, setMatchesState] = useState<MatchDetails[]>([]);

  const callForSchedulesData = (seasonID: string) => {
    getSchedulesData(seasonID)
      .then(checkError)
      .then((response) => {
        console.log(
          console.log(
            `/soccer/trial/v4/en/seasons/sr:season:${seasonID}/schedules.json?api_key=${APIKey}`
          )
        );
        const results = extractingMatchesResults(response.schedules);
        console.log(response.schedules);
        console.log(results);
        setMatchesState(results);
      })
      .catch((error) => {
        console.log(error);
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
    callForSchedulesData(initialSeasonID);
  }, [initialSeasonID]);

  return { matchesState: matchesState, callForSchedulesData };
};
