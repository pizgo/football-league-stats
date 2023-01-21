import { useEffect, useState } from "react";
import { fetchingSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataOperations";
import { errorMessage } from "../consts/strings";
import { MatchesDetails } from "../types/types";

export const useFetchMatchesResults = () => {
  const [matchesState, setMatchesState] = useState<MatchesDetails[]>();

  const callForSchedulesData = () => {
    fetchingSchedulesData()
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

  return { matchesState, callForSchedulesData };
};
