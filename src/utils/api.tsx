const APIKey = process.env.REACT_APP_API_KEY;
const APISeasonsID : string = "sr:competition:202";
export const firstSeason : string = "sr:season:84320"

export const getSchedulesData = (seasonID: string): Promise<Response> => {
  return fetch(
    `/soccer/trial/v4/en/seasons/${seasonID}/schedules.json?api_key=${APIKey}`
  );
};

export const getSeasonsData = (): Promise<Response> => {
  return fetch(
    `soccer/trial/v4/en/competitions/${APISeasonsID}/seasons.json?api_key=${APIKey}`
  );
};

export const getMatchTimeline = (singleMatchID: string): Promise<Response> => {
  return fetch(
    `soccer/trial/v4/en/sport_events/${singleMatchID}/timeline.json?api_key=${APIKey}`
  );
};

export const getLineups = (singleMatchID: string): Promise<Response> => {
  return fetch(
      `soccer/trial/v4/en/sport_events/${singleMatchID}/lineups.json?api_key=${APIKey}`
  );
};
