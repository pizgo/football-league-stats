import {
  APILineups,
  APIPlayersLineups,
  APIPlayersStatistics,
  APISchedule,
  APISeasons,
  APIStatistics,
  APITimeline,
  CompetitorInfo,
  LineupsSchema,
  PlayersStatisticsAPI,
  PlayersStatisticsSchema
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

    return {
      homeCompetitor: homeCompetitor,
      awayCompetitor: awayCompetitor,
      matchID: el.sport_event.id,
      matchDate: el.sport_event.start_time.slice(0, 10),
      stadiumName: el.sport_event.venue.name,
      winnerID: el.sport_event_status.winner_id,
      status: el.sport_event_status.status,
    };
  });
  return arrayOfResults;
};

export const extractingSeasonsDetails = (array: APISeasons[]) => {
  let arrayOfResults = array.map((el) => {
    return {
      seasonID: el.id,
      seasonName: el.name,
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
    return {
      competitor: el.competitor,
      players: el.players,
      type: el.type,
      matchTime: el.match_time,
    };
  });

  return arrayOfResults.filter((el) => eventsForTimeline((el)));

};

export const extractingStatisticsData = (array: APIStatistics[]) => {
  let arrayOfResults = array.map((el) => {
    return {
      qualifier: el.qualifier,
      statistics: el.statistics,
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

  return finalStats;
}

const buildPlayerInfo = (playersArray: PlayersStatisticsAPI[]) => {
  let playersResults = playersArray.map((el) => {
    let statistics = {
      goals_scored: el.statistics.goals_scored,
      red_cards: el.statistics.red_cards,
      substituted_in: el.statistics.substituted_in,
      substituted_out: el.statistics.substituted_out,
      yellow_cards: el.statistics.yellow_cards
    }

    let actions = Object.entries(statistics).filter((el) => el[1] > 0).map((el) => el[0])
    return {
      name: el.name,
      statistics: actions
    }
  })
  return playersResults
}

export const extractingPlayersStatisticsData = (array: APIPlayersStatistics[]) => {

  let arrayOfResults = array.map((el) => {
    let players = buildPlayerInfo(el.players)

    return {
      qualifier: el.qualifier,
      players: players
    }
  })
  return arrayOfResults
}

const buildLineupInfo = (playersArray: APIPlayersLineups[]) => {
  let playersResults = playersArray.map((el) => {
    return {
      name: el.name,
      type: el.type,
      jersey_number: el.jersey_number,
      starter: el.starter,
      position: el.position
    }
  })
  return playersResults
}

export const extractingLineupsData = (array: APILineups[]) => {
  let arrayOfResults = array.map((el) => {

    let players = buildLineupInfo(el.players)
    return {
      qualifier: el.qualifier,
      players: players
    }
  })
  return arrayOfResults
}

export const transformLineupsData = (arrayLineups: LineupsSchema[], arrayStatistics: PlayersStatisticsSchema[]) => {

  let result: {[index:string] : any[]} =  {}
  console.log(arrayLineups)
  console.log(arrayStatistics)

  let indexOfHomeInLineup = arrayLineups[0].qualifier === "home" ? 0 : 1
  let indexOfAwayInLineup = 1 - indexOfHomeInLineup

  result.away = arrayLineups[indexOfAwayInLineup].players
  result.home = arrayLineups[indexOfHomeInLineup].players

  //convert second array arrayStatistics to dict
  let playerStat: {[index:string]: any[]} = {}
  arrayStatistics.forEach( (el) => {
    el.players.forEach( (player) => {
      playerStat[player.name] = player.statistics
    })
  })

  result.away.forEach((player) => {
    if(!player.statistics) {
      player.statistics = playerStat[player.name]
    }
  })
  result.home.forEach((player) => {
    if(!player.statistics) {
      player.statistics = playerStat[player.name]
    }
  })
  return result
}

