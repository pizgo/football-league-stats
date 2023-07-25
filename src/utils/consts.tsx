export const errorMessage: string = "Something went wrong. Try again later";
export const mobileHeadersContent  = [
  "HT",
  "AT",
  "Result",
  "Date",
];
export const tabletHeadersContent  = [
  "Home Team",
  "Away Team",
  "Result",
  "Date",
];
export const desktopHeadersContent  = [
  "Host team",
  "Away team",
  "Result",
  "Date",
  "Stadium",
];

export const changePlayerNameFormat = (name: string) => {
  let newName = name.split(',')
  return newName[0]
}
