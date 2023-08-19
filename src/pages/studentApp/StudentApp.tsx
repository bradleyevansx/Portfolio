import { Box } from "@chakra-ui/react";
import detailView from "../../assets/studentAppPhotos/detailView.png";
import listView from "../../assets/studentAppPhotos/listView.png";
import login from "../../assets/studentAppPhotos/login.png";
import startHorizontal from "../../assets/studentAppPhotos/startHorizontal.png";
import ImageCarousel from "../../components/ImageCarousel";
import Page from "../../components/Page";
import ProjectLinks from "../../components/ProjectLinks";
import useViewportHeight from "../../hooks/useViewportHeight";
import StudentAppText from "./StupentAppText";

const photos = [login, detailView, listView, startHorizontal];

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

        <Box width={{ base: "unset", lg: "100%" }}>
          <ImageCarousel colorScheme="gray" photos={photos}></ImageCarousel>
          <ProjectLinks
            githubLink="https://github.com/bradleyevansx/StudentApp"
            websiteLink="https://gray-sky-09e31dd10.3.azurestaticapps.net"
          />
        </Box>
      </Box>
    </Page>
  );
};

export default StudentApp;
