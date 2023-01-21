export interface MatchDetails {
  competitorName1: string;
  competitorName2: string;
  away_score: number;
  home_score: number;
  id: string;
}

export interface ApiSchedule {
  sport_event: {
    competitors: ApiCompetitor[];
    id: string;
  };
  sport_event_status: {
    away_score: number;
    home_score: number;
  };
}

export interface ApiCompetitor {
  name: string;
}
