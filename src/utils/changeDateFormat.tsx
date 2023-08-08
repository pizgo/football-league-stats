export const changeDateFormat = (date: string) => {
    let splitted = date.split('-')
    let month
    if (splitted[1] === "01") {
        month = "January"
    } else if (splitted[1] === "02") {
        month = "February"
    } else if (splitted[1] === "03") {
        month = "March"
    } else if (splitted[1] === "04") {
        month = "April"
    } else if (splitted[1] === "05") {
        month = "May"
    } else if (splitted[1] === "06") {
        month = "June"
    } else if (splitted[1] === "07") {
        month = "July"
    } else if (splitted[1] === "08") {
        month = "August"
    } else if (splitted[1] === "09") {
        month = "September"
    } else if (splitted[1] === "10") {
        month = "October"
    } else if (splitted[1] === "11") {
        month = "November"
    } else if (splitted[1] === "12") {
        month = "December"
    }
    return splitted[2] + " " + month + " " + splitted[0]
}