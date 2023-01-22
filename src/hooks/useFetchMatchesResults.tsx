import { useEffect, useState } from "react";
import { fetchingSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataTransformation";
import { errorMessage } from "../consts/strings";
import { MatchDetails } from "../types/types";

export const useFetchMatchesResults = () => {
  const [matchesState, setMatchesState] = useState<MatchDetails[]>([]);

  const callForSchedulesData = () => {
    fetchingSchedulesData()
      .then(checkError)
      .then((response) => {
        const results = extractingMatchesResults(response.schedules);
        console.log(response);
        // setMatchesState(results);
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
