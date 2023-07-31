export const changePlayerNameFormat = (name: string) => {
    let newName = name.split(',')
    if (newName.length > 1) {
        return newName[0] + ", " + newName[1][1] + "."
    } else return newName[0]
}