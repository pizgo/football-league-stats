import React from "react";
import { seasons } from "../consts/consts";

interface SeasonSelectProps {
  onChangeSelect: (chosenSeasonID: string) => void;
  value: string;
}

const SeasonSelect: React.FC<SeasonSelectProps> = ({
  onChangeSelect,
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
        {seasons.map((el, key) => (
          <option value={el.seasonID} key={el.seasonID} label={el.seasonName} />
        ))}
      </select>
    </form>
  );
};

export default SeasonSelect;
