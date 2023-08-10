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
        margin={"0 auto"}
        alignItems={{ base: "center" }}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        gap={{ base: 0, lg: 20 }}
        padding={{ base: 5, lg: 20 }}
        maxWidth={{ base: "unset", lg: "1357px" }}
        height={availableHeight}
      >
        <StudentAppText></StudentAppText>

        <Box>
          <ImageCarousel></ImageCarousel>
          <Card margin={"20px auto"} padding={2} width={"fit-content"}>
            <HStack>
              <IconButton
                as={Link}
                target="_blank"
                href={"https://github.com/bradleyevansx/StudentApp"}
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
      </Box>
    </Page>
  );
};

export default StudentApp;
