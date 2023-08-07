import { Box, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import hand from "../assets/Rock1.png";
import hand1 from "../assets/Rock2.png";
import useViewportHeight from "../hooks/useViewportHeight";

const RockHand = () => {
  const variant = {
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        opacity: { delay: 0.7 },
        y: { repeat: Infinity, duration: 1.5, stiffness: 75 },
      },
    },
  };

  const viewportHeight = useViewportHeight();

  return (
    <HStack
      pointerEvents={"none"}
      zIndex={"1"}
      height={viewportHeight}
      width={"100vw"}
      minWidth={"fit-content"}
      position={"absolute"}
      justifyContent="center"
      alignItems={"end"}
    >
      <motion.div
        style={{
          width: "340px",
          display: "flex",
          gap: "10rem",
        }}
        animate="visible"
        variants={variant}
      >
        <Image height={350} pointerEvents={"none"} src={hand}></Image>
        <Image height={350} pointerEvents={"none"} src={hand1}></Image>
      </motion.div>
      <Box width={"200px"}></Box>
    </HStack>
  );
};

export default RockHand;
