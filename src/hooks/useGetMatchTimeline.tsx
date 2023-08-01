import { useState } from "react";
import { getMatchTimeline } from "../utils/api";
import { extractingTimelineData } from "../utils/dataTransformation";
import {SingleMatchTimelineSchema} from "../types/types";
import { errorMessage } from "../utils/consts";

export const useGetMatchTimeline = () => {
  const [timeline, setTimeline] = useState<SingleMatchTimelineSchema[]>([]);

  const callForMatchTimeline = (singleMatchId : string) => {
    getMatchTimeline(singleMatchId)
      .then(checkError)
      .then((response) => {
        const results = extractingTimelineData(response.timeline);
        setTimeline(results);
        console.log(results)
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
