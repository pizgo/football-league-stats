import React from "react";
import SingleMatchOverview from "../components/SingleMatch/SingleMatchOverview";
import SingleMatchTimeline from "../components/SingleMatch/SingleMatchTimeline";
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
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box className="p-2">
                    <div>{children}</div>
                </Box>
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
               <SingleMatchOverview
                      chosenMatch={chosenMatch}
                      timeline={timeline}/>
                  <Box className="border-b-2 mt-4 border-b-light-100">
                      <Tabs value={value}
                            onChange={handleTabChange}
                            aria-label="single match tabs"
                            variant="fullWidth">
                          <Tab label="Overview" {...tabProps(0)} />
                          <Tab label="Statistics" {...tabProps(1)} />
                          <Tab label="Lineups" {...tabProps(2)} />
                      </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                      <SingleMatchTimeline
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
