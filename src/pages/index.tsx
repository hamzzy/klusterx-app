import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { Layout } from "../components/Layout";
import { HeroSection } from "../components/Hero";
import { useEffect, useState } from "react";
import bgimage from "../../public/banner.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TableTab from '../components/TableTab';
const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    <Layout>
      <Flex
        w={"full"}
        marginTop="0"
        bgImage="url('banner.png')"
        backgroundSize={"cover"}
        backgroundColor="#37003c"
        backgroundPosition="100% 100%"
        backgroundRepeat="no-repeat"
        position="relative"
      >
        <HeroSection />

      </Flex>


      <TableTab/>

    </Layout>
  );
};

export default Home;