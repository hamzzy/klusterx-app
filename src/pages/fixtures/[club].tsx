import { Layout } from '@/components/Layout'
import { Box, Center, Container, Flex, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router';
import { logo } from '@/data';
// import { getClubLogo } from '@/utils';


const getClubLogo = (name: string) => {
  const club_logo=logo.find((item: any) => item.name === name);
  
  return club_logo;

}

export default function fixtures() {

  const router = useRouter()
  const { club } = router.query
  const clubLogo = getClubLogo(club)
  return (
    <Layout>

   <Flex
     w={"full"}
     marginTop="0"
     bgImage="url('../stadium.jpg')"
     backgroundSize={"cover"}
     backgroundPosition="100% 100%"
     backgroundRepeat="no-repeat"
     position="relative"
     height="200"
   >
    <Container maxW="container.lg">
          <HStack>

             {/* <Box mt={9}>
                <Image src={clubLogo} />
              </Box> */}
              <Heading size="2xl" mb={4}  color="gray.700">
              {club} Fixture Table
              </Heading>
  
              
          </HStack>
      </Container>
   </Flex>

   <Flex>

    
   </Flex>
   </Layout>
  )
}
