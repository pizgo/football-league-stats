import {
  APISchedule,
  APISeasons,
  APITimeline,
  CompetitorInfo
} from "../types/types";

const buildCompetitorInfo = (
    schedule: APISchedule,
    isHome: boolean
): CompetitorInfo => {
  let index = isHome
      ? schedule.sport_event.competitors[0].qualifier === "home"
          ? 0
          : 1
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

export const extractingTimelineData = (array: APITimeline[]) => {
  let arrayOfResults = array.map((el) => {
    let id = el.id;
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
      id: id,
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