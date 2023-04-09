import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Center,
  Text,
  Image,
  HStack,
  VStack,
  Container,
  CardBody,
  Card,
} from "@chakra-ui/react";
import { Fixture, getClubLogo, getFormattedDate } from "@/utils";

export const LeagueFixture = ({ fixtures , selectedTeam }:{ fixtures: Fixture[], selectedTeam : string}) => (
  <VStack align="stretch">
    <Box>
      {fixtures
        .filter(
          (fixture: any) =>
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
                      {/* <Box>

              <Text size-="10" color="teal">
                {fixture.homeTeam}
              </Text>
              </Box> */}

                      <Box>
                        <Image
                          src={getClubLogo(fixture.homeTeam)}
                          height="70"
                          alt="home team logo"
                        />
                      </Box>
                      <Box>
                        <Text size-="10">
                          {getFormattedDate(fixture.fix_date)}
                        </Text>

                        <Center>
                          <Text
                            size="sm"
                            variant="solid"
                            fontSize="30px"
                            mr="2"
                          >
                            {fixture.homeScore}
                          </Text>{" "}
                          -
                          <Text
                            size="sm"
                            variant="solid"
                            fontSize="30px"
                            ml="2"
                          >
                            {fixture.awayScore}
                          </Text>
                        </Center>
                      </Box>
                      <Box>
                        <Image
                          src={getClubLogo(fixture.awayTeam)}
                          height="70"
                          alt="away team logo"
                        />
                      </Box>
                      {/* <Box>

              <Text size-="10" color="teal">
                {fixture.awayTeam}
              </Text>
              </Box> */}
                    </HStack>
                  </Center>
                </CardBody>
              </Card>
            </Container>
          </>
        ))}
    </Box>
  </VStack>
);
