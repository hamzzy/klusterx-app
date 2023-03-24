import { data } from '@/data';
import {getLeagueTableStats} from "@/utils";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, HStack, Heading, VStack } from '@chakra-ui/react';
import { LeagueTable} from './LeagueTable';

export default function TableTab() {
  return (
    <Flex mt="15" >
<Tabs isFitted variant='enclosed' width="100%">
  <TabList>
    <Tab>League Table</Tab>
    <Tab>Fixture Table</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
        <LeagueTable data={getLeagueTableStats(data)}/>
    </TabPanel>
    <TabPanel>
        
    </TabPanel>
  </TabPanels>
</Tabs>
    </Flex>
  )
}
