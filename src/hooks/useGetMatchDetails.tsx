import { useState } from "react";
import { getMatchTimeline } from "../utils/api";
import {extractingStatisticsData, extractingTimelineData} from "../utils/dataTransformation";
import {SingleMatchTimelineSchema, StatisticsSchema} from "../types/types";
import { errorMessage } from "../utils/consts";

export const useGetMatchDetails = () => {
  const [timeline, setTimeline] = useState<SingleMatchTimelineSchema[]>([]);
  const [statistics, setStatistics] = useState<StatisticsSchema[]>([]);

  const callForMatchDetails = (singleMatchId : string) => {
    getMatchTimeline(singleMatchId)
      .then(checkError)
      .then((response) => {
        const resultsTimeline = extractingTimelineData(response.timeline);
        const resultsStatistics = extractingStatisticsData(response.statistics.totals.competitors);
        setTimeline(resultsTimeline);
        setStatistics(resultsStatistics);
        console.log(resultsStatistics)
      });
  };
  const checkError = (response: Response) => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };
  return { timeline, statistics, callForMatchDetails };
};
