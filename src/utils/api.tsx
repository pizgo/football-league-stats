const APIKey = process.env.REACT_APP_API_KEY;

export const getSchedulesData = (seasonID: string): Promise<Response> => {
  return fetch(
    `/soccer/trial/v4/en/seasons/${seasonID}/schedules.json?api_key=${APIKey}`
  );
};

export const getSeasonsData = (): Promise<Response> => {
  return fetch(
    `soccer/trial/v4/en/competitions/sr:competition:202/seasons.json?api_key=${APIKey}`
  );
};

export const getMatchDetails = (): Promise<Response> => {
  return fetch(
    `soccer/trial/v4/en/sport_events/sr:sport_event:22926007/timeline.json?api_key=${APIKey}`
  );
};
