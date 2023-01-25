import { useState } from "react";
import { getMatchTimeline } from "../utils/api";
import { errorMessage } from "../consts/consts";
import {
  extractingTimelineData,
} from "../utils/dataTransformation";
import {SingleMatchTimelineSchema} from "../types/types";

export const useGetMatchTimeline = () => {
  const [timeline, setTimeline] = useState<SingleMatchTimelineSchema[]>([]);

  const callForMatchTimeline = (singleMatchId : string) => {
    getMatchTimeline(singleMatchId)
      .then(checkError)
      .then((response) => {
        const results = extractingTimelineData(response.timeline);
        console.log(response)
        setTimeline(results);
      });
  };
  const checkError = (response: Response) => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };

  return { timeline, callForMatchTimeline };
};
