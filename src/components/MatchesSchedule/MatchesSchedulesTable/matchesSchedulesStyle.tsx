const green = "#5aa13d";
const red = "#ba2929";
const orange = "#db611a";

export const colorBackgroundSetting = ( gameStatus: string, winnerId: string | undefined, competitorId: string): {} => {
    if (gameStatus !== "closed") {
        return { backgroundColor: "none" };
    } else if (!winnerId) {
        return { backgroundColor: orange };
    } else if (winnerId && winnerId === competitorId) {
        return { backgroundColor: green };
    } else {
        return { backgroundColor: red };
    }
};

export const displayWhenStatusNotClosed = (gameStatus: string) => {
    if (gameStatus == "postponed") {
        return "game postponed";
    } else if (gameStatus === "delayed") {
        return "game delayed";
    } else if (gameStatus === "not_started") {
        return "not started";
    }
};