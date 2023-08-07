import { Box, Heading, Text } from "@chakra-ui/react";

const ProjectsText = () => {
  return (
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
        My portfolio showcases projects where I've utilized C#/.NET, Blazor,
        .NET Web API, React, TypeScript, and Azure. These technologies have
        enabled me to build robust apps, dynamic web interfaces, efficient APIs,
        and user-friendly experiences. My work underscores my commitment to
        innovative solutions across diverse tech domains.
      </Heading>
    </Box>
  );
};

export default ProjectsText;
