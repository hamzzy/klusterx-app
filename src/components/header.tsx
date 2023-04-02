import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Image } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children}
  >
    {children}
  </Link>
);

export default function Header() {
 
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure();


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
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
                            <HStack spacing='5px' align="center">                

                    <Image src='../logo.svg' alt='Logo'  height="50px"/>
                    <span>
 Leauge
                    </span>
                    </HStack>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
              <>
                <Menu>
                  <MenuList>
                    <MenuItem>
                      <Link href="/dashboard" textDecoration="none">
                        Dashboard
                      </Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Text>Logout</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}