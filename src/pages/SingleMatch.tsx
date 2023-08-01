import React from "react";
import { Box,
        Container,
        Tab,
        Tabs} from "@mui/material";
import CustomTabPanel from "../components/Layout/CustomTabPanel";
interface SingleMatchDetailsProps {
  singleMatchSummary: React.ReactNode,
  overviewTab: React.ReactNode;
}
const SingleMatch: React.FC<SingleMatchDetailsProps> = ({singleMatchSummary, overviewTab}) => {
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
                {singleMatchSummary}
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
                      {overviewTab}
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
