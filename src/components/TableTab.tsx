import { data } from '@/data';
import {getLeagueTableStats} from "@/utils";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, HStack, Heading, VStack } from '@chakra-ui/react';
import { LeagueTable} from './League';

export default function TableTab() {
  return (
    <Flex mt="15" >
        <LeagueTable data={getLeagueTableStats(data)}/>
    </Flex>
  )
}
