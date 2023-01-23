import { useEffect, useState } from "react";
import { getMatchDetails, getSeasonsData } from "../utils/api";
import { APISeasons, SeasonDetailBuilder } from "../types/types";
import { extractingSeasonsDetails } from "../utils/dataTransformation";
import { errorMessage } from "../consts/consts";

export const useGetMatchDetails = () => {
  const [matchDetail, setMatchDetail] = useState<any>();

  const callForMatchData = () => {
    getMatchDetails()
      .then(checkError)
      .then((response) => {
        console.log(response);
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
    callForMatchData();
  }, []);

  return { callForMatchData };
};
