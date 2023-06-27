import React from "react";
import { SeasonDetailSchema } from "../../types/types";
import { Form } from "react-bootstrap";
import { FormControl, InputLabel, Select, MenuItem, NativeSelect} from "@mui/material";

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
      <>
      <div className="md:hidden">
          {/*<FormControl fullWidth>*/}
          {/*  <InputLabel htmlFor="choose-season" className="">Choose season to display</InputLabel>*/}
          {/*  <Select*/}
          {/*      labelId="demo-simple-select-label"*/}
          {/*      id="demo-simple-select"*/}
          {/*      value={value}*/}
          {/*      label="Age"*/}
          {/*      onChange={handleChange}>*/}
          {/*    {seasonsDetails.map((el, key) => (*/}
          {/*          <MenuItem value={el.seasonID} key={el.seasonID} label={el.seasonName}/>*/}
          {/*        ))}*/}
          {/*  </Select>*/}
          {/*</FormControl>*/}
          {/*  <FormControl fullWidth>*/}
          {/*       <InputLabel variant="standard" htmlFor="uncontrolled-native">*/}
          {/*         Choose season to display*/}
          {/*       </InputLabel>*/}
          {/*        <NativeSelect*/}
          {/*            inputProps={{id: 'uncontrolled-native'}}*/}
          {/*            value={value}*/}
          {/*            onChange={handleChange}>*/}
          {/*    {seasonsDetails.map((el, key) => (*/}
          {/*            <MenuItem value={el.seasonID} key={el.seasonID} label={el.seasonName}/>*/}
          {/*          ))}*/}
          {/*    </NativeSelect>*/}
          {/*  </FormControl>*/}
      </div>




    {/*<Form.Select*/}
          {/*    value={value}*/}
          {/*    onChange={handleChange}*/}
          {/*    className="fw-bold"*/}
          {/*    role="button">*/}
          {/*    {seasonsDetails.map((el, key) => (*/}
          {/*        <option value={el.seasonID} key={el.seasonID} label={el.seasonName} />*/}
          {/*    ))}*/}
          {/*</Form.Select>*/}

      </>
  );
};

export default SeasonSelect;
