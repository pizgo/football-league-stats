import React from "react";
interface StatisticsProps {
    name: string
}
const PlayerTypeName: React.FC<StatisticsProps> = ({ name }) => {

    return <div className="row-auto font-bold text-base text-primary-200 border-b  my-3">{name}</div>
}

export default PlayerTypeName;