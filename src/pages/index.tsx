import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { HeroSection } from "../components/Hero";
import { League } from "@/components/League";
import { data } from "@/data";
const Home: NextPage = () => {
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

      <Flex mt="15">
        <League data={data} />
      </Flex>
    </Layout>
  );
};

export default Home;
