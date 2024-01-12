import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TourismAndGuide = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <h3 className="text-lg font-medium text-gray">Overview</h3>
          </Tab>
          <Tab>
            <h3 className="text-lg font-medium text-gray">Our Packages</h3>
          </Tab>
          <Tab>
            <h3 className="text-lg font-medium text-gray">
              Meet Our Tour Guide
            </h3>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismAndGuide;
