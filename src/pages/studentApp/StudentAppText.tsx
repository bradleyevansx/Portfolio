import { Box, Heading, Text } from "@chakra-ui/react";

const StudentAppText = () => (
  <Box width={{ base: "335px", sm: "440px" }}>
    <Heading
      lineHeight={{ base: 1, sm: "unset" }}
      display={"flex"}
      justifyContent={{ base: "center", md: "start" }}
      mb={2}
      letterSpacing={"-3px"}
      fontSize={{ base: "5xl", sm: "6xl", md: "8xl" }}
    >
      <Text
        whiteSpace={"nowrap"}
        bgClip="text"
        textAlign={{ base: "center", md: "start" }}
        bgGradient="linear(to-l, #90cdf4, #B794F4 90%)"
      >
        Practice <br /> Session Tracker
      </Text>
    </Heading>
    <Heading
      mb={9}
      letterSpacing={"-1px"}
      textAlign={{ base: "center", md: "start" }}
      fontSize={{ base: "md", sm: "xl", md: "xl" }}
    >
      I designed this practice session tracking app for my drum students. This
      user-friendly app, developed using .NET and Blazor, allows users to
      monitor their practice sessions by duration and specific focus points.
      Leveraging Azure and Cosmos DB, the app ensures seamless data storage and
      retrieval.. -Feel free to try the website by registering or using the test
      account. <br></br> username: TestUser | password: Password
    </Heading>
  </Box>
);

export default StudentAppText;
