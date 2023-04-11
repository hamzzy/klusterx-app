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
  HStack,
} from "@chakra-ui/react";
import { createFixtures, getClubLogo, getLeagueTableStats } from "@/utils";
import { LeagueFixture } from './LeagueFixture';
import { ArrowBackIcon } from "@chakra-ui/icons";



export const League = (data: any)  => {
  const [fixtures] = useState(() => createFixtures(data));
  const [selectedTeam, setSelectedTeam] = useState("");
  const LeagueTableStat = getLeagueTableStats(data);

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
              <Image
                src={getClubLogo(selectedTeam)}
                alt="team logo"
                height="100"
              />

              <Heading as="h2" size="lg">
                {selectedTeam} fixtures
              </Heading>
            </HStack>
          </Box>
          <LeagueFixture fixtures={fixtures} selectedTeam={selectedTeam} />
        </>
      ) : (
        <Table variant="simple" size="md" boxShadow="xl" borderRadius="20px">
          <Thead>
            <Tr height="100px">
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
          <Tbody height="100px">
            {LeagueTableStat.map((item, index) => (
              <Tr
                key={index}
                _hover={{ backgroundColor: "gray.100", cursor: "pointer" }}
              >
                <Td>{index + 1}</Td>
                <Td>
                  <HStack spacing="5px" align="center">
                    <Image
                      src={getClubLogo(item.name)}
                      height="7"
                      alt="team logo"
                    />
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
