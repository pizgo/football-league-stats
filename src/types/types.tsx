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
  statistics: { }
}

export interface StatisticsSchema {
  [index:string] : any
}

export interface LineupsTwo {
  competitor: string,
  players: [{
    name: string,
    jersey_number: string,
    type: string,
    position?: string,
    starter?: boolean,
    stats?: {
      [index:string] : any
    }
  }
  ]
}

