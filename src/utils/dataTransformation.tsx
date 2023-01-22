import { ApiSchedule } from "../types/types";

export const extractingMatchesResults = (array: ApiSchedule[]) => {
  let arrayOfResults = array.map((el) => {
    let homeCompetitor;
    let awayCompetitor;
    if (el.sport_event.competitors[0].qualifier === "home") {
      homeCompetitor = {
        name: el.sport_event.competitors[0].name,
        id: el.sport_event.competitors[0].id,
        // halfScore: el.sport_event_status.period_scores[0].home_scores, //TODO check why its not working
        result: el.sport_event_status.home_score,
      };
      awayCompetitor = {
        name: el.sport_event.competitors[1].name,
        id: el.sport_event.competitors[1].id,
        result: el.sport_event_status.away_score,
      };
    } else {
      awayCompetitor = {
        name: el.sport_event.competitors[0].name,
        id: el.sport_event.competitors[0].id,
        result: el.sport_event_status.away_score,
      };
      homeCompetitor = {
        name: el.sport_event.competitors[1].name,
        id: el.sport_event.competitors[1].id,
        // halfScore: el.sport_event_status.period_scores[0].home_scores,
        result: el.sport_event_status.home_score,
      };
    }
    let matchID = el.sport_event.id;
    let matchDate = el.sport_event.start_time.slice(0, 10);
    let venue = el.sport_event.venue.name;
    let winnerID = el.sport_event_status.winner_id;
    // let half_score_away = el.sport_event_status.period_scores[0].away_score;
    // let half_score_home = el.sport_event_status.period_score[0].home_score;

    return {
      homeCompetitor: homeCompetitor,
      awayCompetitorName: awayCompetitor,
      matchID: matchID,
      matchDate: matchDate,
      stadiumName: venue,
      winnerID: winnerID,
    };
  });
  console.log(arrayOfResults);
  return arrayOfResults;
};
