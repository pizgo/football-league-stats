export const APIKey = process.env.REACT_APP_API_KEY;
// export const APISeasonSchedule: string = `/soccer/trial/v4/en/seasons/${seasonID}/schedules.json?api_key=${APIKey}`;

export const getSchedulesData = (seasonID: string): Promise<Response> => {
  return fetch(
    `/soccer/trial/v4/en/seasons/sr:season:${seasonID}/schedules.json?api_key=${APIKey}`
  );
};
