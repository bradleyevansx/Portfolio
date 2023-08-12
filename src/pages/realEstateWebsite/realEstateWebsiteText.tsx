import { Box, Heading, Text } from "@chakra-ui/react";

const RealEstateWebsiteText = () => (
  <Box width={{ base: "335px", sm: "440px" }}>
    <Heading
      lineHeight={{ base: 1, sm: 1 }}
      display={"flex"}
      justifyContent={{ base: "center", lg: "start" }}
      mb={{ base: 2, sm: 5 }}
      letterSpacing={"-3px"}
      fontSize={{ base: "5xl", sm: "6xl", lg: "9xl" }}
    >
      <Text
        width={"440px"}
        whiteSpace={"nowrap"}
        bgClip="text"
        textAlign={{ base: "center", lg: "start" }}
        bgGradient="linear(to-l, #90cdf4, #B794F4 90%)"
      >
        Realtor <br /> Website
      </Text>
    </Heading>
    <Heading
      mb={9}
      letterSpacing={"-1px"}
      textAlign={{ base: "center", lg: "start" }}
      fontSize={{ base: "md", sm: "xl", md: "xl" }}
    >
      Utilizing React, I created a contemporary realtor website with an
      intuitive user interface, seamless navigation, and visually pleasing
      design. Carefully executed, the platform achieves a harmonious blend of
      aesthetic appeal and functionality, delivering an engaging experience for
      users in search of their ideal homes.
    </Heading>
  </Box>
);

export default RealEstateWebsiteText;
