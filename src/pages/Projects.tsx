import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BaseProjectCard from "../components/BaseProjectCard";
import MediumProjectCard from "../components/MediumProjectCard";
import RockHand from "../components/RockHand";
import useViewportHeight from "../hooks/useViewportHeight";

const Projects = () => {
  const availableHeight = useViewportHeight();

  return (
    <motion.div animate={{ opacity: [0, 1], transition: { delay: 0.5 } }}>
      <Box display={{ base: "none", lg: "initial" }}>
        <RockHand></RockHand>
      </Box>
      <Box
        margin={"0 auto"}
        maxWidth={"1111px"}
        pb={{ base: 50, sm: 0 }}
        ps={5}
        pe={5}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "space-evenly" }}
        display={"flex"}
        height={availableHeight}
      >
        <Box zIndex={3}>
          <Heading
            display={"flex"}
            justifyContent={{ base: "center", md: "start" }}
            width={{ base: "335px", sm: "420px", md: "500px", lg: "340px" }}
            mb={5}
            letterSpacing={"-3px"}
            fontSize={{ base: "6xl", sm: "7xl", md: "8xl" }}
          >
            <Text
              width={{ base: "300px", md: "450px" }}
              whiteSpace={"nowrap"}
              bgClip="text"
              textAlign={{ base: "center", md: "start" }}
              bgGradient="linear(to-l, #90cdf4, #B794F4 90%)"
            >
              Projects
            </Text>
          </Heading>
          <Heading
            width={{ base: "335px", sm: "420px", md: "500px", lg: "340px" }}
            mb={8}
            letterSpacing={"-1px"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "md", sm: "xl", md: "xl" }}
          >
            These projects showcase where I've utilized C#/.NET, Blazor, .NET
            Web API, React, TypeScript and Azure. These technologies have
            enabled me to build robust apps, dynamic web interfaces, efficient
            APIs, and user-friendly experiences. My work shows how I bring
            creative solutions to different tech areas.
          </Heading>
        </Box>
        <Box display={{ base: "inherit", md: "none" }}>
          <BaseProjectCard></BaseProjectCard>
        </Box>
        <Box display={{ base: "none", md: "inherit" }}>
          <MediumProjectCard></MediumProjectCard>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Projects;
