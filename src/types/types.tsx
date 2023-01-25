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
  halfScore: number | undefined;
  result: number;
}

export interface APITimeline {
  id: string,
  competitor: string,
  home_score?: number,
  away_score?: number,
  players?: {
    name: string,
    type: string,
  }[],
  type: string;
  time: string;
  match_time?: number;
  period?: number;
  period_type?: string;
  break_name?: string;
  match_clock?: string;
}

export interface SingleMatchTimelineSchema {
  id: string,
  competitor: string,
  home_score?: number,
  away_score?: number,
  players?: {
    name: string,
    type: string,
  }[],
  type: string;
  time: string;
  matchTime?: number;
  period?: number;
  periodType?: string;
  breakName?: string;
  matchClock?: string;
}

