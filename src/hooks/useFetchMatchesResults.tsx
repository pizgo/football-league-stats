import { useEffect, useState } from "react";
import { APISeasonSchedule, fetchingSchedulesData } from "../utils/api";
import { ApiSchedule, MatchesDetails } from "../types/types";
import { errorMessage } from "../consts/strings";

export const useFetchMatchesResults = () => {
  const [matchesState, setMatchesState] = useState<MatchesDetails[]>();

  const callForSchedulesData = () => {
    fetchingSchedulesData()
      .then(checkError)
      .then((response) => {
        const results = extractingMatchesResults(response.schedules);
        setMatchesState(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const extractingMatchesResults = (array: ApiSchedule[]) => {
    let arrayOfResults = array.map((el) => {
      let competitorName1 = el.sport_event.competitors[0].name;
      let competitorName2 = el.sport_event.competitors[1].name;
      let result1 = el.sport_event_status.away_score;
      let result2 = el.sport_event_status.home_score;
      let id = el.sport_event.id;

      return {
        competitorName1: competitorName1,
        competitorName2: competitorName2,
        away_score: result1,
        home_score: result2,
        id: id,
      };
    });
    return arrayOfResults;
  };

  const checkError = (response: Response) => {
    if (response.status >= 400) {
      throw Error(errorMessage);
    } else {
      return response.json();
    }
  };

  useEffect((): void => {
    callForSchedulesData();
  }, []);

  return { matchesState, callForSchedulesData };
};

// useEffect(() => {
//   fetch(APISeasonSchedule)
//
//     .then((response) => {
//       console.log(response);
//       tryingToDoThis(response.schedules);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

// const schedules = matchesState;
// console.log(schedules);

// const tryingToDoThis = (array: ApiSchedule[]) => {
//   let arrayObjects = array.map((el) => {
//     let competitorName1 = el.sport_event.competitors[0].name;
//     let competitorName2 = el.sport_event.competitors[1].name;
//     let result1 = el.sport_event_status.away_score;
//     let result2 = el.sport_event_status.home_score;
//     return {
//       name1: competitorName1,
//       name2: competitorName2,
//       result1: result1,
//       result2: result2,
//     };
//   });
//   console.log(arrayObjects);
// };
