export interface APISeasons {
  id: string;
  name: string;
}

export interface SeasonDetailSchema {
  seasonID: string;
  seasonName: string;
}
export interface APISchedule {
  sport_event: {
    competitors: APICompetitorInfo[];
    id: string;
    venue: APIVenue;
    start_time: string;
  };
  sport_event_status: {
    away_score: number;
    home_score: number;
    winner_id: string;
    status: string;
    period_scores: APIPeriodScores[];
  };
}

interface APICompetitorInfo {
  name: string;
  id: string;
  qualifier: string;
  abbreviation: string;
}

interface APIPeriodScores {
  home_score: number;
  away_score: number;
}

interface APIVenue {
  name: string;
}

export interface SingleMatchSchema {
  homeCompetitor: CompetitorInfo;
  awayCompetitor: CompetitorInfo;
  matchID: string;
  matchDate: string;
  stadiumName: string;
  winnerID: string | undefined;
  status: string;
}

export interface CompetitorInfo {
  name: string;
  id: string;
  abbreviation: string;
  halfScore: number | undefined;
  result: number;
}

export interface APITimeline {
  competitor: string,
  players?: {
    name: string,
    type: string,
  }[],
  type: string;
  match_time?: number;
}

export interface SingleMatchTimelineSchema {
  competitor: string,
  players?: {
    name: string,
    type: string,
  }[],
  type: string;
  matchTime?: number;
}

export interface APIStatistics {
  qualifier: string,
  statistics: APISingleStatistics
}

export interface StatisticsSchema {
    qualifier: string,
    statistics: APISingleStatistics
}

interface APISingleStatistics {
  ball_possession: number;
  cards_given: number;
  corner_kicks: number;
  fouls: number;
  free_kicks: number;
  goal_kicks: number;
  injuries: number;
  offsides: number;
  red_cards: number;
  shots_blocked: number;
  shots_off_target: number;
  shots_on_target: number;
  shots_saved: number;
  shots_total: number;
  substitutions: number;
  throw_ins: number;
  yellow_card: number;
  yellow_red_cards: number;
}
