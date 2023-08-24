import {
  APILineups,
  APIPlayersStatistics,
  APISchedule,
  APISeasons,
  APIStatistics,
  APITimeline,
  CompetitorInfo, PlayersInfoAPI,
} from "../types/types";
import {changeStatsNameFormat} from "./changeStatsNameFormat";

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
    let matchTime = el.match_time
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

export const extractingStatisticsData = (array: APIStatistics[]) => {
  let arrayOfResults = array.map((el) => {
    let qualifier = el.qualifier;
    let statistics = el.statistics

    return {
      qualifier: qualifier,
      statistics: statistics,
    }
  })
  let finalStats : {[index:string] : any} = {}
  const transformStats = (stats: {[index:string] : any }, statsForOneSide : any) : {[index:string] : any} => {
    let teamSide = statsForOneSide.qualifier === 'home' ? 'home' : 'away'
    let statsNames = Object.keys(statsForOneSide.statistics)
    statsNames.forEach( (el) => {
      if (!stats[el]){
        stats[el] = {}
      }
      stats[el][teamSide] = statsForOneSide.statistics[el]
    })
    return stats
  }
  finalStats = transformStats(finalStats, arrayOfResults[0])
  finalStats = transformStats(finalStats, arrayOfResults[1])

  return finalStats
}

const buildPlayerInfo = (playersArray: PlayersInfoAPI[]) => {
  let playersResults = playersArray.map((el) => {
    let name = el.name
    let statistics = {
      goals_scored: el.statistics.goals_scored,
      red_cards: el.statistics.red_cards,
      substituted_in: el.statistics.substituted_in,
      substituted_out: el.statistics.substituted_out,
      yellow_cards: el.statistics.yellow_cards
    }

    let actions = Object.entries(statistics).filter((el) => {
      return el[1] > 0
    }).map((el) => {
      return el[0]
    })
    return {
      name: name,
      statistics: actions
    }
  })
  return playersResults
}

export const extractingPlayersStatisticsData = (array: APIPlayersStatistics[]) => {

  let arrayOfResults = array.map((el) => {
    let qualifier = el.qualifier;
    let players = buildPlayerInfo(el.players)

    return {
      qualifier: qualifier,
      players: players
    }
  })
  return arrayOfResults
}

export const extractingLineupsData = (array: APILineups[]) => {
  let arrayOfResults = array.map((el) => {
    let qualifier = el.qualifier;
    let players = {
      name: el.players.name,
      type: el.players.type,
      jersey_number: el.players.jersey_number,
      starter: el.players.starter,
      position: el.players.position,
    }
    return {
      qualifier: qualifier,
      players: players
    }
  })
  return arrayOfResults
}

