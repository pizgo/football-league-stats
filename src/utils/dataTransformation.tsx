import {
  APISchedule,
  APISeasons,
  APITimeline,
  buildCompetitorInfo,
} from "../types/types";

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

export const extractingTimelineData = (array: APITimeline[]) => {
  let arrayOfResults = array.map((el) => {
    let competitor = el.competitor;
    let home_score = el.home_score;
    let away_score = el.away_score;
    let players = el.players;
    let type = el.type;
    let time = el.time;
    let matchTime = el.match_time;
    let period = el.period;
    let periodType = el.period_type;
    let breakName = el.break_name;
    let matchClock = el.match_clock;

    return {
      competitor: competitor,
      homeScore: home_score,
      awayScore:  away_score,
      players: players,
      type: type,
      time: time,
      matchTime: matchTime,
      period: period,
      periodType: periodType,
      breakName: breakName,
      matchClock: matchClock,
    };
  });
  return arrayOfResults;
};
