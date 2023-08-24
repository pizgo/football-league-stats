import { useState } from "react";
import { getMatchTimeline } from "../utils/api";
import {
    extractingPlayersStatisticsData,
    extractingStatisticsData,
    extractingTimelineData
} from "../utils/dataTransformation";
import {PlayersStatisticsSchema, SingleMatchTimelineSchema, StatisticsSchema} from "../types/types";
import { errorMessage } from "../utils/consts";

export const useGetMatchDetails = () => {
  const [timeline, setTimeline] = useState<SingleMatchTimelineSchema[]>([]);
  const [statistics, setStatistics] = useState<StatisticsSchema>({});
  const [playersStatistics, setPlayersStatistics] = useState<PlayersStatisticsSchema[]>([]);

  const callForMatchDetails = (singleMatchId : string) => {
    getMatchTimeline(singleMatchId)
      .then(checkError)
      .then((response) => {
        const resultsTimeline = extractingTimelineData(response.timeline);
        const resultsStatistics = extractingStatisticsData(response.statistics.totals.competitors);
        const resultsPlayersStatistics = extractingPlayersStatisticsData(response.statistics.totals.competitors);
        setTimeline(resultsTimeline);
        setStatistics(resultsStatistics);
        setPlayersStatistics(resultsPlayersStatistics);
        console.log(resultsPlayersStatistics)
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
