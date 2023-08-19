import { Box } from "@chakra-ui/react";
import ImageCarousel from "../../components/ImageCarousel";
import Page from "../../components/Page";
import ProjectLinks from "../../components/ProjectLinks";
import useViewportHeight from "../../hooks/useViewportHeight";
import RealEstateWebsiteText from "./realEstateWebsiteText";

import home1 from "../../assets/realEstateWebsitePhotos/RealEstateWebsiteHome.png";
import home2 from "../../assets/realEstateWebsitePhotos/RealEstateWebsiteHome1.png";
import aboutUs1 from "../../assets/realEstateWebsitePhotos/RealEstateWebsiteAboutUs.png";
import aboutUs2 from "../../assets/realEstateWebsitePhotos/RealEstateWebsiteAboutUs1.png";

const photos = [home1, home2, aboutUs1, aboutUs2];

const RealEstateWebsite = () => {
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
        <RealEstateWebsiteText></RealEstateWebsiteText>

        <Box width={{ base: "unset", lg: "100%" }}>
          <ImageCarousel
            colorScheme="blackAlpha"
            photos={photos}
          ></ImageCarousel>
          <ProjectLinks
            githubLink="https://github.com/bradleyevansx/RobertPerezTeam"
            websiteLink="https://robert-perez-team.vercel.app/"
          />
        </Box>
      </Box>
    </Page>
  );
};

export default RealEstateWebsite;
