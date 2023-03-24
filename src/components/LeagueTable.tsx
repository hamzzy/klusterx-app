import { useState, useEffect } from 'react';
import { Box, Center, Heading, Table, Tbody, Td, Th, Thead, Tr,Text,Image, SimpleGrid, HStack } from "@chakra-ui/react";
import { data, getLeagueTableStats, logo } from "@/data";
import { url } from 'inspector';
import { getClubLogo } from '@/utils';


interface TeamData {
      position: number;
      name: string;
      gamesPlayed: number;
      wins: number;
      losses: number;
      draws: number;
      goalsScored: number;
      goalsConceded: number;
      goalDifference: number;
      points: number;
  }

  interface LeagueTableProps {
    data: TeamData[];
  }

 export  const LeagueTable: React.FC<LeagueTableProps> = ({ data }) => {

   
  return (
    <Box p="4" borderRadius="md" boxShadow="md" overflow="hidden" bg="white" mt="10">
      <Center mb="10">
        <Heading size="md">Premier League Table</Heading>
      </Center>
      <Table variant="simple" size="md" boxShadow="md">
        <Thead>
          <Tr>
            <Th>Position</Th>
            <Th >Team </Th>
            <Th isNumeric>
              P
            </Th>
            <Th isNumeric >
              W
            </Th>
            <Th isNumeric >
              D
            </Th>
            <Th isNumeric>
              L
            </Th>
            <Th isNumeric >
              GF
            </Th>
            <Th isNumeric>
              GA
            </Th>
            <Th isNumeric>
              GD
            </Th>
            <Th isNumeric>
              Pts
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.position}</Td>
              <Td>
              <HStack spacing='5px' align="center">                
              <Image src={getClubLogo(item.name)} height="7" />
              <Text>{item.name} </Text>
              </HStack>
              </Td>
              <Td isNumeric>{item.gamesPlayed}</Td>
              <Td isNumeric>{item.wins}</Td>
              <Td isNumeric>{item.draws}</Td>
              <Td isNumeric>{item.losses}</Td>
              <Td isNumeric>{item.goalsScored}</Td>
              <Td isNumeric>{item.goalsConceded}</Td>
              <Td isNumeric>{item.goalDifference}</Td>
              <Td isNumeric>
                {item.points}
              </Td>
            </Tr>
          ))}
       
          </Tbody>
       </Table>
        </Box>
   )
 }

