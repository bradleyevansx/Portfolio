import { Image, VStack } from "@chakra-ui/react";
import thumbs from "../assets/thumbsUp.png";
import useViewportHeight from "../hooks/useViewportHeight";
import { motion } from "framer-motion";

const Hand = () => {
  const variant = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: {
      opacity: 1,

      x: 50,
      y: [-5, 5, -5],
      transition: {
        opacity: { delay: 0.7 },
        x: { delay: 0.7 },
        y: { repeat: Infinity, duration: 1.5, stiffness: 75 },
      },
    },
  };

  const viewportHeight = useViewportHeight();

  return (
    <VStack
      zIndex={"base"}
      alignItems={"end"}
      justifyContent={"end"}
      height={viewportHeight}
      width={"100vw"}
      minWidth={"fit-content"}
      position={"absolute"}
    >
      <motion.div initial="hidden" animate="visible" variants={variant}>
        <Image
          pointerEvents={"none"}
          minWidth={"300px"}
          mb={{ base: 20 }}
          src={thumbs}
          height={{ base: 100, sm: 150, md: 200 }}
        ></Image>
      </motion.div>
    </VStack>
  );
};

export default Hand;
