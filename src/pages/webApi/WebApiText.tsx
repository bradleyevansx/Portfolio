import { Box, Heading, Text } from "@chakra-ui/react";

const text = {
  title: "Web Api",
  body: "This API ensures smooth connectivity between the user data and the client side. By incorporating user authentication mechanisms, the API provides a solid foundation for safeguarding sensitive information and maintaining personalized access controls. Through this cohesive integration, the .NET Web API acts as a pivotal link between the application and the Azure Cosmos DB.",
};

const StudentAppText = () => (
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
        whiteSpace={"nowrap"}
        bgClip="text"
        textAlign={{ base: "center", lg: "start" }}
        bgGradient="linear(to-l, #90cdf4, #B794F4 90%)"
      >
        {text.title}
      </Text>
    </Heading>
    <Heading
      mb={9}
      letterSpacing={"-1px"}
      textAlign={{ base: "center", lg: "start" }}
      fontSize={{ base: "md", sm: "xl", md: "xl" }}
    >
      {text.body}
    </Heading>
  </Box>
);

export default StudentAppText;
