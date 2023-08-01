import {
  APISchedule,
  APISeasons,
  APITimeline,
  CompetitorInfo, SingleMatchTimelineSchema
} from "../types/types";

const buildCompetitorInfo = (schedule: APISchedule, isHome: boolean): CompetitorInfo => {
  let index = isHome ? schedule.sport_event.competitors[0].qualifier === "home" ? 0 : 1
      : schedule.sport_event.competitors[0].qualifier === "away"
          ? 0
          : 1;
  let halfScoreCompetitor = undefined;
  if (schedule.sport_event_status.status === "closed") {
    halfScoreCompetitor = isHome
        ? schedule.sport_event_status.period_scores[0].home_score
        : schedule.sport_event_status.period_scores[0].away_score;
  }
  let result = isHome
      ? schedule.sport_event_status.home_score
      : schedule.sport_event_status.away_score;

  return {
    name: schedule.sport_event.competitors[index].name,
    id: schedule.sport_event.competitors[index].id,
    abbreviation: schedule.sport_event.competitors[index].abbreviation,
    halfScore: halfScoreCompetitor,
    result: result,
  };
};

export const extractingMatchesResults = (array: APISchedule[]) => {
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

export const extractingSeasonsDetails = (array: APISeasons[]) => {
  let arrayOfResults = array.map((el) => {
    let seasonID = el.id;
    let seasonName = el.name;
    return {
      seasonID: seasonID,
      seasonName: seasonName,
    };
  });
  return arrayOfResults;
};

const eventsForTimeline = (el: APITimeline) => {
  return (
      el.type === "score_change" ||
      el.type === "yellow_card" ||
      el.type === "red_card" ||
      el.type === "substitution"
  );
};

export const extractingTimelineData = (array: APITimeline[]) => {
  let arrayOfResults = array.map((el) => {
    let competitor = el.competitor;
    let players = el.players;
    let type = el.type
    let matchTime = el.match_time;
    return {
      competitor: competitor,
      players: players,
      type: type,
      matchTime: matchTime,
    };
  });
  let filteredArrayOfResults = arrayOfResults.filter((el) => eventsForTimeline((el)))
  return filteredArrayOfResults;
};