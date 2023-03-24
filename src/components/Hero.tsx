import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    VStack,
    Box,
    Input,
  } from "@chakra-ui/react";
 
  
  import { FunctionComponent, useContext, useEffect, useState } from "react";
  interface HeroSectionProps {}
  
  export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    const [getdata, setData] = useState<any>([]);
  
        
  
    return (
      <Container maxW="container.lg">
        <Center p={4} minHeight="30vh">
          <VStack>
            <Container maxW="container.md" textAlign="left">
              <Heading size="2xl" mb={4}  color="whiteAlpha.700">
              Premier League Table
              </Heading>
  
              <Box mt={9}>
                
              </Box>
            </Container>

          </VStack>
        </Center>
      </Container>
    );
  };