import {
    Center,
    Container,
    Heading,
    VStack,
    Box,
  } from "@chakra-ui/react";
 
  
  
  export const HeroSection = () => {  
        
  
    return (
      <>
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
      </>
    );
  };