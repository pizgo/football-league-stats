const green = "#5aa13d";
const red = "#ba2929";
const orange = "#db611a";
const black = "#000000"

export const teamNameColor = (gameStatus: string, winnerId: string | undefined, competitorId: string): {} => {
    if (gameStatus !== "closed") {
        return { color: black };
    } else if (!winnerId) {
        return { color: orange };
    } else if (winnerId && winnerId === competitorId) {
        return { color: green };
    } else {
        return { color: red };
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