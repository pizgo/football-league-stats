import React from "react";
interface PlayerTypeName {
    name: string
}
const PlayerTypeName: React.FC<PlayerTypeName> = ({ name }) => {

    return <div className="row-auto font-bold text-sm sm:text-base text-primary-200 border-b  my-3">{name}</div>
}

export default PlayerTypeName;