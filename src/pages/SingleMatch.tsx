import React from "react";
import SingleMatchSummary from "../components/SingleMatch/SingleMatchSummary/SingleMatchSummary";
import OverviewTab from "../components/SingleMatch/SingleMatchOverview/OverviewTab";
import { SingleMatchSchema, SingleMatchTimelineSchema } from "../types/types";
import { Box,
        Container,
        Tab,
        Tabs} from "@mui/material";
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
interface SingleMatchDetailsProps {
  chosenMatch: SingleMatchSchema;
  timeline: SingleMatchTimelineSchema[];
}
const SingleMatch: React.FC<SingleMatchDetailsProps> = ({chosenMatch, timeline}) => {
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
            <Container>
               <SingleMatchSummary
                      chosenMatch={chosenMatch}
                      timeline={timeline}/>
                  <div className="mt-4">
                      <Tabs value={value}
                            onChange={handleTabChange}
                            aria-label="single match tabs"
                            variant="fullWidth">
                          <Tab label="Overview" {...tabProps(0)} />
                          <Tab label="Statistics" {...tabProps(1)} />
                          <Tab label="Lineups" {...tabProps(2)} />
                      </Tabs>
                  </div>
                  <CustomTabPanel value={value} index={0}>
                      <OverviewTab
                          chosenMatch={chosenMatch}
                          timeline={timeline}/>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                      Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                      Item Three
                  </CustomTabPanel>
             </Container>
        </>
  );
};

export default SingleMatch;
