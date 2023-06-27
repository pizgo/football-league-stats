export const formattedEventType =  (type : string | undefined) : string => {
    return type ? type.charAt(0).toUpperCase() + type.slice(1).replaceAll("_", " ") : ""
}