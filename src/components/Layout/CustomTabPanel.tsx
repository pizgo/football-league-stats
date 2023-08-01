import React from "react";
import {Box} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const CustomTabPanel: React.FC<TabPanelProps> = ({children, value, index, ...other}) => {

    return (
        <div role="tabpanel"
             className="bg-white border-x border-b border-primary-100 rounded rounded-t-none"
             hidden={value !== index}
             id={`tabpanel-${index}`}
             aria-labelledby={`tab-${index}`}
             {...other}>
            {value === index && (
                <Box>{children}</Box>
            )}
        </div>
    );
}

export default CustomTabPanel