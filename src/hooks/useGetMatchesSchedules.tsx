import { useEffect, useState } from "react";
import { getSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";
import { SingleMatchSchema } from "../types/types";

export const useGetMatchesSchedules = (chosenSeason: string) => {
  const [matchesState, setMatchesState] = useState<SingleMatchSchema[]>([]);

  const callForSchedulesData = (seasonID: string) => {
    if (seasonID) getSchedulesData(seasonID)
      .then(checkError)
      .then((response) => {
        const results = extractingMatchesResults(response.schedules);
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

  // useEffect((): () => void => {
  //     const timer = setTimeout(() => {
  //       callForSchedulesData(chosenSeason);
  //     }, 1001);
  //     return () => clearTimeout(timer);
  // }, [chosenSeason]);

    useEffect(() => {
            callForSchedulesData(chosenSeason);
    }, [chosenSeason]);

  return { matchesState: matchesState, callForSchedulesData };
};
