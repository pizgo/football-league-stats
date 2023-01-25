import React from "react";
import { SeasonDetailSchema } from "../types/types";
import { Form } from "react-bootstrap"

interface SeasonSelectProps {
  onChangeSelect: (chosenSeasonID: string) => void;
  seasonsDetails: SeasonDetailSchema[];
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
      <Form.Select value={value} onChange={handleChange} size="lg">
        {seasonsDetails.map((el, key) => (
          <option value={el.seasonID} key={el.seasonID} label={el.seasonName} />
        ))}
      </Form.Select>
  );
};

export default SeasonSelect;
