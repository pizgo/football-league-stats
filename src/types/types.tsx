export interface MatchesDetails {
  competitorName1: string;
  competitorName2: string;
  result1: number;
  result2: number;
}

export interface ApiSchedule {
  sport_event: {
    competitors: ApiCompetitor[];
  };
  sport_event_status: {
    away_score: number;
    home_score: number;
  };
}

export interface ApiCompetitor {
  name: string;
}
