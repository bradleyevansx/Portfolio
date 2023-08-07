import { AiOutlineLink } from "react-icons/ai";
import { Box, Card, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import ImageCarousel from "../../components/ImageCarousel";
import Page from "../../components/Page";
import useViewportHeight from "../../hooks/useViewportHeight";
import StudentAppText from "./StudentAppText";

const StudentApp = () => {
  const availableHeight = useViewportHeight();

  return (
    <Page id="student-app">
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        padding={5}
        width={"100vw"}
        height={availableHeight}
      >
        <StudentAppText></StudentAppText>
        <ImageCarousel></ImageCarousel>

        <Card margin={"20px auto"} padding={2} width={"fit-content"}>
          <HStack>
            <IconButton
              as={Link}
              target="_blank"
              href={"https://github.com/bradleyevansx"}
              size={"lg"}
              aria-label="Git Hub"
              icon={<FaGithub size={30} />}
            />
            <IconButton
              as={Link}
              href={"https://gray-sky-09e31dd10.3.azurestaticapps.net/login"}
              target="_blank"
              size={"lg"}
              aria-label="Linked In"
              icon={<AiOutlineLink size={30} />}
            />
          </HStack>
        </Card>
      </Box>
    </Page>
  );
};

export default StudentApp;
