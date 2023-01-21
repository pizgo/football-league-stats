import { ApiSchedule } from "../types/types";

export const extractingMatchesResults = (array: ApiSchedule[]) => {
  let arrayOfResults = array.map((el) => {
    let competitorName1 = el.sport_event.competitors[0].name;
    let competitorName2 = el.sport_event.competitors[1].name;
    let result1 = el.sport_event_status.away_score;
    let result2 = el.sport_event_status.home_score;
    let id = el.sport_event.id;

    return {
      competitorName1: competitorName1,
      competitorName2: competitorName2,
      away_score: result1,
      home_score: result2,
      id: id,
    };
  });
  return arrayOfResults;
};
