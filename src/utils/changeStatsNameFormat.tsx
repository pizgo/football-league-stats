export const changeStatsNameFormat = (statsName: string) => {
    let capitalizeFirstLetter = statsName.charAt(0).toUpperCase()
    let removeUnderscoreFromTheRemainingString =  statsName.slice(1).split('_').join(" ")
    if (statsName === 'ball_possession') {
        return capitalizeFirstLetter + removeUnderscoreFromTheRemainingString + " %"
    } else return  capitalizeFirstLetter + removeUnderscoreFromTheRemainingString;
}