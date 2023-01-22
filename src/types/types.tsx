export interface ApiSchedule {
  sport_event: {
    competitors: APICompetitorInfo[];
    id: string;
    venue: APIVenue;
    start_time: string;
  };
  sport_event_status: {
    away_score: number;
    home_score: number;
    winner_id: number;
    period_scores: APIPeriodScores[];
  };
}
interface APICompetitorInfo {
  name: string;
  id: string;
  qualifier: string;
}

interface APIPeriodScores {
  home_scores: number;
  away_score: number;
}

interface APIVenue {
  name: string;
}

export interface MatchDetails {
  homeCompetitor: CompetitorInfo;
  awayCompetitor: CompetitorInfo;
  matchID: string;
  matchDate: string;
  stadiumName: string;
  winnerID?: number;
}

interface CompetitorInfo {
  name: string;
  id: string;
  // halfScore: number;
  result: number;
}
