import { useState } from "react";
import { getMatchTimeline, getLineups } from "../utils/api";
import {
    extractingLineupsData,
    extractingPlayersStatisticsData,
    extractingStatisticsData,
    extractingTimelineData
} from "../utils/dataTransformation";
import {LineupsSchema, PlayersStatisticsSchema, SingleMatchTimelineSchema, StatisticsSchema} from "../types/types";
import { errorMessage } from "../utils/consts";

export const useGetMatchDetails = () => {
  const [timeline, setTimeline] = useState<SingleMatchTimelineSchema[]>([]);
  const [statistics, setStatistics] = useState<StatisticsSchema>({});
  const [playersStatistics, setPlayersStatistics] = useState<PlayersStatisticsSchema[]>([]);
  const [lineups, setLineups] = useState<LineupsSchema[]>([]);

  const callForMatchDetails = async (singleMatchId: string) => {
      //pierwszy call
      const requestTimeLine = await getMatchTimeline(singleMatchId)
          .then(checkError)
            const resultsTimeline = extractingTimelineData(requestTimeLine.timeline);
            const resultsStatistics = extractingStatisticsData(requestTimeLine.statistics.totals.competitors);
            const resultsPlayersStatistics = extractingPlayersStatisticsData(requestTimeLine.statistics.totals.competitors);
            setTimeline(resultsTimeline);
            setStatistics(resultsStatistics);
            setPlayersStatistics(resultsPlayersStatistics);
            console.log(resultsPlayersStatistics)

      //delay zrobiony zgodnie z https://stackoverflow.com/questions/71319011/how-to-set-timeout-for-a-fetch-in-promise-all
      await new Promise((resolve) => setTimeout(resolve, 1001));
      //drugi call, po delay
      const requestLineups = await getLineups(singleMatchId)
          .then(checkError)
          const resultsLineups = extractingLineupsData(requestLineups.lineups.competitors)
          console.log(resultsLineups)
  };
  const checkError = (response: Response) : any  => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };


  return { timeline, statistics, callForMatchDetails };
};
