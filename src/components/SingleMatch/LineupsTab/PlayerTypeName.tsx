import React from "react";
interface PlayerTypeName {
    name: string
}
const PlayerTypeName: React.FC<PlayerTypeName> = ({ name }) => {

    return <h1 className="row-auto font-bold text-sm sm:text-base text-primary-200 border-b my-3 sm:mt-5 sm:mb-4">{name}</h1>
}
export default PlayerTypeName;