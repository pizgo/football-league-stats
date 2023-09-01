
import { getSchedulesData } from "../utils/api";
import { extractingMatchesResults } from "../utils/dataTransformation";
import { SingleMatchSchema } from "../types/types";
import { errorMessage } from "../utils/consts";
import {APIKey} from "./APIKey";

export const getSchedules = (seasonID: string) => {
    fetch(`/soccer/trial/v4/en/seasons/${seasonID}/schedules.json?api_key=${APIKey}`)
        .then(checkError)
        .then((response) => {
            const results = extractingMatchesResults(response.schedules)
            console.log("blablabla")
            console.log("react query results")
            console.log(results)
            return results
        })
        .catch((error) => {
            console.log(error);
        });
    };
    const checkError = (response: Response) => {
        if (response.status >= 400) {
            throw Error(errorMessage);
        } else {
            return response.json();
        }
    };

