import { useEffect, useState } from "react";
import { getSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";
import { SingleMatchSchema } from "../types/types";

export const useGetMatchesSchedules = (initialSeasonID: string) => {
  const [matchesState, setMatchesState] = useState<SingleMatchSchema[]>([]);

  const callForSchedulesData = (seasonID: string) => {
    getSchedulesData(seasonID)
      .then(checkError)
      .then((response) => {
        const results = extractingMatchesResults(response.schedules);
        // console.log(response.schedules);
        // console.log(results);
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
