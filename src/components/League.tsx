import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Flex,
  ListItem,
  List,
  VStack,
  TagLabel,
  Tag,
  Container,
  Divider,
  TagLeftIcon,
  Grid,
  GridItem,
  StackDivider,
  Code,
} from "@chakra-ui/react";
import { getClubLogo, getFormattedDate } from "@/utils";
import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { data as dd } from "../data";

interface LeagueTableProps {
  data: TeamData[];
}

interface Fixture {
  homeTeam?: string;
  awayTeam?: string;
  homeScore?: number;
  awayScore?: number;
  fix_date: Date;
}

const createFixtures = () => {
  const pastFixtures: Fixture[] = [];
  const futureFixtures: Fixture[] = [];
  const currentDateTime = new Date("2021-05-05T14:00:00");

  for (const { score, date } of dd) {
    const entries: any = Object.entries(score);
    const fix_date = new Date(date);

    const [homeTeam, homeScore]: any = entries.find(
      ([key, value]) => value !== ""
    );
    const [awayTeam, awayScore]: any = entries.find(
      ([key, value]) => key !== homeTeam
    );
    const fixture: any = { homeTeam, awayTeam, homeScore, awayScore, fix_date };
    console.log(fixture);

    if (fix_date < currentDateTime) {
      pastFixtures.push(fixture);
    } else {
      futureFixtures.push(fixture);
    }
  }
  return [...pastFixtures.reverse(), ...futureFixtures];
};

export const LeagueTable = ({ data }) => {
  const [fixtures] = useState(() => createFixtures());
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleBackClick = () => {
    setSelectedTeam("");
  };

  const handleTeamClick = (teamName: string) => {
    setSelectedTeam(teamName);
  };

  return (
    <Box
      p="4"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      width="100%"
      bg="white"
      mt="10"
    >
      <Center mb="10">
        <Heading size="md">Premier League Table</Heading>
      </Center>

      {selectedTeam ? (
        <>
          <Box mb={10}>
            <Text>
              <a href="#" onClick={handleBackClick}>
                <ArrowBackIcon boxSize={10} />
                Back to all fixtures
              </a>
            </Text>
          </Box>
          <Box>
            <HStack spacing="5px" align="center">
              <Image src={getClubLogo(selectedTeam)} height="100" />

              <Heading as="h2" size="lg">
                {selectedTeam} fixtures
              </Heading>
            </HStack>
          </Box>

          <VStack align="stretch">
            <Box>
              {fixtures
                .filter(
                  (fixture) =>
                    fixture.homeTeam === selectedTeam ||
                    fixture.awayTeam === selectedTeam
                )
                .map((fixture, index) => (
                  <>
                    <Container>
                      <Card
                        mt="10"
                        variant="elevated"
                        _hover={{ backgroundColor: "", cursor: "pointer" }}
                        borderBottom-color="rgb(239, 239, 239)"
                        alignContent="center"
                        width="700px"
                        height="120px"
                      >
                        <CardBody>
                          <Center>
                            <HStack spacing={2}>
                              <Text size-="10" color="teal">
                                {fixture.homeTeam}
                              </Text>
                              <Box>
                                <Image
                                  src={getClubLogo(fixture.homeTeam)}
                                  height="70"
                                />
                              </Box>
                              <Box>
                                  <Text size-="10">
                                    {getFormattedDate(fixture.fix_date)}
                                  </Text>

                                  <Center>
                                <Text size="sm" variant='solid' fontSize="38px" variant='solid' mr="2">
                                  {fixture.homeScore}
                                     </Text>
                                     {" "}
                                     -
                                     
                                     <Text size="sm" variant='solid' fontSize="38px" ml="2">
                                  {fixture.awayScore}
                                     </Text>
                                     </Center>
                                     
                                  
                              </Box>
                              <Box>
                                <Image
                                  src={getClubLogo(fixture.awayTeam)}
                                  height="70"
                                />
                              </Box>
                              <Text size-="10" color="teal">
                                {fixture.awayTeam}
                              </Text>
                            </HStack>
                          </Center>
                        </CardBody>
                      </Card>
                    </Container>
                  </>
                ))}
            </Box>
          </VStack>
        </>
      ) : (
        <Table variant="simple" size="md" boxShadow="xl" borderRadius="20px">
          <Thead>
            <Tr height="100px" backgroundColor="rgb(255, 0, 128)">
              <Th>Position</Th>
              <Th>Team </Th>
              <Th isNumeric>P</Th>
              <Th isNumeric>W</Th>
              <Th isNumeric>D</Th>
              <Th isNumeric>L</Th>
              <Th isNumeric>GF</Th>
              <Th isNumeric>GA</Th>
              <Th isNumeric>GD</Th>
              <Th isNumeric>Pts</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr
                key={index}
                _hover={{ backgroundColor: "gray.100", cursor: "pointer" }}
              >
                <Td>{item.position}</Td>
                <Td>
                  <HStack spacing="5px" align="center">
                    <Image src={getClubLogo(item.name)} height="7" />
                    <Text
                      onClick={() => handleTeamClick(item.name)}
                      fontWeight="bold"
                    >
                      {item.name}{" "}
                    </Text>
                  </HStack>
                </Td>
                <Td isNumeric>{item.gamesPlayed}</Td>
                <Td isNumeric>{item.wins}</Td>
                <Td isNumeric>{item.draws}</Td>
                <Td isNumeric>{item.losses}</Td>
                <Td isNumeric>{item.goalsScored}</Td>
                <Td isNumeric>{item.goalsConceded}</Td>
                <Td isNumeric>{item.goalDifference}</Td>
                <Td isNumeric>{item.points}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};
