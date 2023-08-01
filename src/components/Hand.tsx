import { Image, VStack } from "@chakra-ui/react";
import thumbs from "../assets/thumbsUp.png";

const Hand = () => {
  return (
    <VStack
      left={{ base: "-23%", sm: "10%", md: "30%", lg: "50%" }}
      top={{ base: "45%", sm: "50%" }}
      minWidth={"fit-content"}
      position={"absolute"}
    >
      <Image src={thumbs} minWidth={880} height={500}></Image>
    </VStack>
  );
};

export default Hand;
