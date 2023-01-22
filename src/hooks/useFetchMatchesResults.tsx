import { useEffect, useState } from "react";
import { getSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";
import { MatchDetails } from "../types/types";

export const useFetchMatchesResults = () => {
  const [matchesState, setMatchesState] = useState<MatchDetails[]>([]);

  const callForSchedulesData = () => {
    getSchedulesData()
      .then(checkError)
      .then((response) => {
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
    callForSchedulesData();
  }, []);

  return { matchesState: matchesState };
};
