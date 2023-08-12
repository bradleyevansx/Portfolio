import { Box } from "@chakra-ui/react";
import ImageCarousel from "../../components/ImageCarousel";
import Page from "../../components/Page";
import ProjectLinks from "../../components/ProjectLinks";
import useViewportHeight from "../../hooks/useViewportHeight";
import WebApiText from "./WebApiText";
import webApi from "../../assets/webApiPhotos/webApiHorizontal.png";

const photo = [webApi];

const WebApi = () => {
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
        <WebApiText></WebApiText>

        <Box>
          <ImageCarousel
            colorScheme="blackAlpha"
            photos={photo}
          ></ImageCarousel>
          <ProjectLinks
            githubLink="https://github.com/bradleyevansx/WebApi"
            websiteLink=""
          ></ProjectLinks>
        </Box>
      </Box>
    </Page>
  );
};

export default WebApi;
