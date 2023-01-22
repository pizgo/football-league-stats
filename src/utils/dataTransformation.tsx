import { ApiSchedule, buildCompetitorInfo } from "../types/types";

export const extractingMatchesResults = (array: ApiSchedule[]) => {
  let arrayOfResults = array.map((el) => {
    let homeCompetitor = buildCompetitorInfo(el, true);
    let awayCompetitor = buildCompetitorInfo(el, false);

    let matchID = el.sport_event.id;
    let matchDate = el.sport_event.start_time.slice(0, 10);
    let venue = el.sport_event.venue.name;
    let winnerID = el.sport_event_status.winner_id;
    let status = el.sport_event_status.status;

    return {
      homeCompetitor: homeCompetitor,
      awayCompetitor: awayCompetitor,
      matchID: matchID,
      matchDate: matchDate,
      stadiumName: venue,
      winnerID: winnerID,
      status: status,
    };
  });
  return arrayOfResults;
};
