import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BaseProjectCard from "../components/BaseProjectCard";
import MediumProjectCard from "../components/MediumProjectCard";
import ProjectsText from "../components/ProjectsText";
import RockHand from "../components/RockHand";
import useViewportHeight from "../hooks/useViewportHeight";

const Projects = () => {
  const availableHeight = useViewportHeight();

  return (
    <motion.div animate={{ opacity: [0, 1], transition: { delay: 0.5 } }}>
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
    </motion.div>
  );
};

export default Projects;
