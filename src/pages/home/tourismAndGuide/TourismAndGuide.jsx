import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OverviewTab from "./OverviewTab";
import OurPackagesTab from "./OurPackagesTab";
import TourGuideTab from "./TourGuideTab";

const TourismAndGuide = () => {
  return (
    <div className="mb-10 py-10 px-6 bg-[#f6f8f9]">
      <Tabs>
        <TabList>
          <Tab>
            <h3 className="text-lg font-medium text-gray">Our Packages</h3>
          </Tab>
          <Tab>
            <h3 className="text-lg font-medium text-gray">Overview</h3>
          </Tab>
          <Tab>
            <h3 className="text-lg font-medium text-gray">
              Meet Our Tour Guide
            </h3>
          </Tab>
        </TabList>
        <TabPanel>
          <OurPackagesTab></OurPackagesTab>
        </TabPanel>
        <TabPanel>
          <OverviewTab></OverviewTab>
        </TabPanel>
        <TabPanel>
          <TourGuideTab></TourGuideTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismAndGuide;
