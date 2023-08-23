import React from "react";
import { Box,
        Container,
        Tab,
        Tabs} from "@mui/material";
import CustomTabPanel from "../components/Layout/CustomTabPanel";
import {SingleMatchSchema} from "../types/types";

interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema
  singleMatchSummary: React.ReactNode,
  highlightsTab: React.ReactNode;
  statisticsTab: React.ReactNode;
}
const SingleMatch: React.FC<SingleMatchDetailsProps> = ({chosenMatch, singleMatchSummary, highlightsTab, statisticsTab}) => {
    const [value, setValue] = React.useState(0)
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const tabProps = (index: number) => {
        return {
            id: `simple-tab${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }
    return (
        <>
            <Container className="max-w-3xl">
                {singleMatchSummary}
                  <div className="mt-4 md:mt-6">
                      <Tabs value={value}
                            onChange={handleTabChange}
                            aria-label="single match tabs"
                            variant="fullWidth">
                          <Tab label="Highlights" {...tabProps(0)} />
                          <Tab label="Statistics" {...tabProps(1)} />
                          <Tab label="Lineups" {...tabProps(2)} />
                      </Tabs>
                  </div>
                  <CustomTabPanel chosenMatch={chosenMatch} value={value} index={0}>
                      {highlightsTab}
                  </CustomTabPanel>
                  <CustomTabPanel chosenMatch={chosenMatch} value={value} index={1}>
                      {statisticsTab}
                  </CustomTabPanel>
                  <CustomTabPanel chosenMatch={chosenMatch} value={value} index={2}>
                      Item Three
                  </CustomTabPanel>
             </Container>
        </>
  );
};
export default SingleMatch;
