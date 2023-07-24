import React, {ReactNode} from "react";
import { SeasonDetailSchema } from "../../types/types";
import {InputLabel, Select, MenuItem, SelectChangeEvent} from "@mui/material";

interface SeasonSelectProps {
  onChangeSelect: (chosenSeasonID: string) => void;
  seasonsDetails: SeasonDetailSchema[];
  value: string;
}

const SeasonSelect: React.FC<SeasonSelectProps> = ({ onChangeSelect, seasonsDetails, value}) => {
  const handleChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    const chosenSeasonID = event.target.value;
    onChangeSelect(chosenSeasonID);
    value = chosenSeasonID;
  };

  return (
      <>
          <div className="mb-4 flex flex-col sm:max-w-xs">
                  <Select
                      name="seasonSelect"
                      id="season-select"
                      value={value}
                      onChange={handleChange}>
                      {seasonsDetails.map((el, key) => (
                          <MenuItem value={el.seasonID} key={el.seasonID}>{el.seasonName}</MenuItem>
                      ))}
                  </Select>
          </div>
      </>
  );
};

export default SeasonSelect;


