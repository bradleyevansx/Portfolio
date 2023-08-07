import { Button, Card, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import API from "../assets/API.png";
import studentApp from "../assets/PracticeApp.png";
import realEstateWebsite from "../assets/RealEstateWebsite.png";

const MediumProjectCard = () => (
  <Card
    zIndex={"0"}
    width={{ base: "335px", sm: "420px", md: "500px" }}
    justifyContent={"center"}
    flexDirection={"row"}
    display={"flex"}
    overflow={"hidden"}
    variant={"filled"}
    height={{ base: 250, md: 400 }}
    size={"md"}
  >
    <motion.div
      whileHover={{ scale: 1.05, y: 15 }}
      style={{ position: "absolute" }}
      animate={{ rotate: -15, y: 27, x: -49 }}
    >
      <Button bg={"whiteAlpha.200"} height={"370px"} width={"231px"}>
        <Image src={studentApp}></Image>
      </Button>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: 15 }}
      style={{ position: "absolute" }}
      animate={{ y: 20 }}
    >
      <Button bg={"whiteAlpha.200"} height={"370px"} width={"231px"}>
        <Image src={API}></Image>
      </Button>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05, y: 15 }}
      style={{ position: "absolute" }}
      animate={{ rotate: 15, y: 27, x: 49 }}
    >
      <Button bg={"whiteAlpha.200"} height={"370px"} width={"231px"}>
        <Image src={realEstateWebsite}></Image>
      </Button>
    </motion.div>
  </Card>
);

export default MediumProjectCard;
