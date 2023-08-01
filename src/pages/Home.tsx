import { Box, Heading, Text } from "@chakra-ui/react";
import Hand from "../components/Hand";
import SocialsCard from "../components/SocialsCard";

const Home = () => {
  return (
    <div>
      <Hand></Hand>
      <Box display={"flex"} justifyContent={"center"} height={"100vh"}>
        <Box margin={"auto 0"}>
          <Heading letterSpacing={"-3px"} fontSize={{ base: "6xl", md: "8xl" }}>
            <Text
              width={{ base: 370, md: 600 }}
              bgClip="text"
              textAlign={"center"}
              bgGradient="linear(to-l, #90cdf4, #B794F4 90%)"
            >
              Bradley Evans
            </Text>
          </Heading>
          <Heading
            letterSpacing={"-1px"}
            textAlign={"center"}
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Web Developer/Software Engineer
          </Heading>
          <SocialsCard></SocialsCard>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
