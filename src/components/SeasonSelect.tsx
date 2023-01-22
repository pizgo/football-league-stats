import React, { useState } from "react";
import { season1, season2, season3 } from "../consts/consts";

const SeasonSelect: React.FC = () => {
  return (
    <form>
      <label>Choose season</label>
      <select>
        <option value={season1.seasonID}>{season1.seasonName}</option>
        <option value={season2.seasonID}>{season2.seasonName}</option>
        <option value={season3.seasonID}>{season3.seasonName}</option>
      </select>
    </form>
  );
};

export default SeasonSelect;
