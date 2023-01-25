import React from "react";
import {SingleMatchSchema, SingleMatchTimelineSchema} from "../types/types";

interface SingleMatchTimelineProps {
    chosenMatch: SingleMatchSchema;
    timeline: SingleMatchTimelineSchema[];
}
const SingleMatchTimeline: React.FC<SingleMatchTimelineProps> = ( {chosenMatch, timeline}) => {
    return (
        <></>
    )
}

export default SingleMatchTimeline