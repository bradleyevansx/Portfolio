import { Box } from "@chakra-ui/react";
import BaseProjectCard from "../components/BaseProjectCard";
import MediumProjectCard from "../components/MediumProjectCard";
import Page from "../components/Page";
import ProjectsText from "../components/ProjectsText";
import RockHand from "../components/RockHand";
import useViewportHeight from "../hooks/useViewportHeight";

const Projects = () => {
  const availableHeight = useViewportHeight();

  return (
    <Page id="projects">
      <Box display={{ base: "none", lg: "initial" }}>
        <RockHand></RockHand>
      </Box>
      <Box
        margin={"0 auto"}
        maxWidth={"1111px"}
        pb={{ base: 50, sm: 0 }}
        ps={5}
        pe={5}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "space-evenly" }}
        display={"flex"}
        height={availableHeight}
      >
        <ProjectsText></ProjectsText>
        <Box display={{ base: "inherit", md: "none" }}>
          <BaseProjectCard></BaseProjectCard>
        </Box>
        <Box display={{ base: "none", md: "inherit" }}>
          <MediumProjectCard></MediumProjectCard>
        </Box>
      </Box>
    </Page>
  );
};

export default Projects;
