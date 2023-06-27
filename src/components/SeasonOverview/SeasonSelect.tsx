import React, {ReactNode} from "react";
import { SeasonDetailSchema } from "../../types/types";
import {FormControl, InputLabel, Select, MenuItem, NativeSelect, SelectChangeEvent} from "@mui/material";

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
          <div className="md:hidden mb-10">
              <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="select">
                      Choose season to display
                  </InputLabel>
                  <NativeSelect
                      inputProps={{
                          name: 'season to display',
                          id: 'select',
                      }}>
                      {/*{seasonsDetails.map((el, key) => (*/}
                      {/*    <option value={el.seasonID} key={el.seasonID}>{el.seasonName}</MenuItem>*/}
                      {/*))}*/}
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                  </NativeSelect>
              </FormControl>
          </div>
          <div className="hidden md:block">
              <FormControl fullWidth>
                  <InputLabel  id="demo-simple-select-label">Choose season to display</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={value}
                      label="Choose season to display"
                      onChange={handleChange}>
                      {/*{seasonsDetails.map((el, key) => (*/}
                      {/*    <MenuItem value={el.seasonID} key={el.seasonID}>{el.seasonName}</MenuItem>*/}
                      {/*))}*/}
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              </FormControl>
          </div>
      </>
  );
};

export default SeasonSelect;


