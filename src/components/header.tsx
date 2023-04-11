import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'


export default function Header() {
 


  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        position="sticky"
        top="0"
        py={{ base: 2 }}
        px={{ base: 4 }}
        minH={"60px"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>

          <Box>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
                            <HStack spacing='5px' align="center">                

                    <Image src='../logo.svg' alt='Logo' id ='header-logo'  height="50px"/>
                    <span>
 Leauge
                    </span>
                    </HStack>
            </Link>
          </Box>

        </Flex>

      
      </Box>
    </>
  );
}