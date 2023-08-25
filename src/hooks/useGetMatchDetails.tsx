import { useState } from "react";
import { getMatchTimeline, getLineups } from "../utils/api";
import {
    extractingLineupsData,
    extractingPlayersStatisticsData,
    extractingStatisticsData,
    extractingTimelineData, transformLineupsData
} from "../utils/dataTransformation";
import {
    LineupsPlayersStatistics,
    LineupsSchema,
    PlayersStatisticsSchema,
    SingleMatchTimelineSchema,
    StatisticsSchema
} from "../types/types";
import { errorMessage } from "../utils/consts";

export const useGetMatchDetails = () => {
  const [timeline, setTimeline] = useState<SingleMatchTimelineSchema[]>([]);
  const [statistics, setStatistics] = useState<StatisticsSchema>({});
  const [lineupsPlayersStatistics, setLineupsPlayersStatistics] = useState<LineupsPlayersStatistics>({});

  const callForMatchDetails = async (singleMatchId: string) => {
      //pierwszy call
      const requestTimeLine = await getMatchTimeline(singleMatchId)
          .then(checkError)
            const resultsTimeline = extractingTimelineData(requestTimeLine.timeline);
            const resultsStatistics = extractingStatisticsData(requestTimeLine.statistics.totals.competitors);
            const resultsPlayersStatistics = extractingPlayersStatisticsData(requestTimeLine.statistics.totals.competitors);
            setTimeline(resultsTimeline);
            setStatistics(resultsStatistics);

      //delay zrobiony zgodnie z https://stackoverflow.com/questions/71319011/how-to-set-timeout-for-a-fetch-in-promise-all
      await new Promise((resolve) => setTimeout(resolve, 1001));
      //drugi call, po delay
      const requestLineups = await getLineups(singleMatchId)
          .then(checkError)
          const resultsLineups = extractingLineupsData(requestLineups.lineups.competitors)

      let finalResult =  transformLineupsData(resultsLineups, resultsPlayersStatistics))
      setLineupsPlayersStatistics(finalResult)
      console.log(lineupsPlayersStatistics)

  };
  const checkError = (response: Response) : any  => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };


  return { timeline, statistics, lineupsPlayersStatistics, callForMatchDetails };
};
