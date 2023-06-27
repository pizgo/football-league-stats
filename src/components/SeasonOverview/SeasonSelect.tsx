import React from "react";
import { SeasonDetailSchema } from "../../types/types";
import { Form } from "react-bootstrap";
import { FormControl, InputLabel, NativeSelect} from "@mui/material";

interface SeasonSelectProps {
  onChangeSelect: (chosenSeasonID: string) => void;
  seasonsDetails: SeasonDetailSchema[];
  value: string;
}

const SeasonSelect: React.FC<SeasonSelectProps> = ({ onChangeSelect, seasonsDetails, value}) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenSeasonID = e.target.value;
    onChangeSelect(chosenSeasonID);
    value = chosenSeasonID;
  };
  return (

  <FormControl fullWidth>
    <InputLabel variant="standard" htmlFor="uncontrolled-native">
      Choose season to display
    </InputLabel>
    <NativeSelect
        inputProps={{id: 'uncontrolled-native'}}
        value={value}
        onChange={handleChange}>
      {seasonsDetails.map((el, key) => (
            <option value={el.seasonID} key={el.seasonID} label={el.seasonName} />
          ))}
    </NativeSelect>
  </FormControl>
  );
};

export default SeasonSelect;
