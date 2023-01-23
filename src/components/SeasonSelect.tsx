import React from "react";
import { seasons } from "../consts/consts";
import { SeasonDetailBuilder } from "../types/types";

interface SeasonSelectProps {
  onChangeSelect: (chosenSeasonID: string) => void;
  seasonsDetails: SeasonDetailBuilder[];
  value: string;
}

const SeasonSelect: React.FC<SeasonSelectProps> = ({
  onChangeSelect,
  seasonsDetails,
  value,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenSeasonID = e.target.value;
    onChangeSelect(chosenSeasonID);
    value = chosenSeasonID;
  };
  return (
    <form>
      <select value={value} onChange={handleChange}>
        {seasonsDetails.map((el, key) => (
          <option value={el.seasonID} key={el.seasonID} label={el.seasonName} />
        ))}
      </select>
    </form>
  );
};

export default SeasonSelect;
