import React from "react";
import {Box} from "@mui/material";
import {SingleMatchSchema} from "../../types/types";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    chosenMatch: SingleMatchSchema
}
const CustomTabPanel: React.FC<TabPanelProps> = ({chosenMatch, children, value, index, ...other}) => {

    return (
        <div role="tabpanel"
             className="bg-white border-x border-b border-primary-100 rounded rounded-t-none py--3 md:p-8 text-sm md:text-base"
             hidden={value !== index}
             id={`tabpanel-${index}`}
             aria-labelledby={`tab-${index}`}
             {...other}>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default CustomTabPanel