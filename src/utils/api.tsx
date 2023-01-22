const season1ID: string = "sr:season:77453";
export const APIKey = process.env.REACT_APP_API_KEY;
export const APISeasonSchedule: string = `/soccer/trial/v4/en/seasons/${season1ID}/schedules.json?api_key=${APIKey}`;

export const getSchedulesData = () => {
  return fetch(APISeasonSchedule);
};
