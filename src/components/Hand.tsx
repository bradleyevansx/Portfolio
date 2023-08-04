import { Image, VStack } from "@chakra-ui/react";
import thumbs from "../assets/thumbsUp.png";
import useViewportHeight from "../hooks/useViewportHeight";
import { motion } from "framer-motion";

const Hand = () => {
  const variant = {
    hidden: {
      x: 200,
    },
    visible: {
      x: 50,
      y: [-5, 5, -5],
      transition: { y: { repeat: Infinity, duration: 1.5, stiffness: 75 } },
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
