import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import useViewportHeight from "../hooks/useViewportHeight";
import { motion } from "framer-motion";
import studentApp from "../assets/PracticeApp.png";
import realEstateWebsite from "../assets/RealEstateWebsite.png";
import API from "../assets/API.png";

const Projects = () => {
  const availableHeight = useViewportHeight();

  return (
    <Box
      ps={5}
      pe={5}
      pt={50}
      flexDirection={"column"}
      display={"flex"}
      height={availableHeight}
    >
      <Heading
        mb={5}
        letterSpacing={"-3px"}
        fontSize={{ base: "6xl", md: "8xl" }}
      >
        <Text
          whiteSpace={"nowrap"}
          bgClip="text"
          textAlign={"center"}
          bgGradient="linear(to-l, #90cdf4, #B794F4 90%)"
        >
          Projects
        </Text>
      </Heading>
      <Heading
        mb={8}
        letterSpacing={"-1px"}
        textAlign={"start"}
        fontSize={{ base: "md", md: "3xl" }}
      >
        These projects showcase where I've utilized C#/.NET, Blazor, .NET Web
        API, React, TypeScript and Azure. These technologies have enabled me to
        build robust apps, dynamic web interfaces, efficient APIs, and
        user-friendly experiences. My work shows how I bring creative solutions
        to different tech areas.
      </Heading>
      <Card
        justifyContent={"center"}
        flexDirection={"row"}
        display={"flex"}
        overflow={"hidden"}
        variant={"filled"}
        height={250}
        size={"md"}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: 5 }}
          style={{ position: "absolute" }}
          animate={{ rotate: -15, y: 10, x: -32 }}
        >
          <Button bg={"whiteAlpha.200"} height={60} width={40}>
            <Image src={studentApp}></Image>
          </Button>
        </motion.div>
        <motion.div
          style={{ position: "absolute" }}
          animate={{ y: 10 }}
          whileHover={{ scale: 1.05, y: 5 }}
        >
          <Button bg={"whiteAlpha.200"} height={60} width={40}>
            <Image src={API}></Image>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: 5 }}
          style={{ position: "absolute" }}
          animate={{ rotate: 15, y: 10, x: 32 }}
        >
          <Button bg={"whiteAlpha.200"} height={60} width={40}>
            <Image src={realEstateWebsite}></Image>
          </Button>
        </motion.div>
      </Card>
    </Box>
  );
};

export default Projects;
