import { Button, Card, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import studentApp from "../assets/PracticeApp.png";
import realEstateWebsite from "../assets/RealEstateWebsite.png";
import API from "../assets/API.png";

const BaseProjectCard = () => (
  <Card
    width={{ base: "335px", sm: "420px", md: "500px" }}
    justifyContent={"center"}
    flexDirection={"row"}
    display={"flex"}
    overflow={"hidden"}
    variant={"filled"}
    height={{ base: 250 }}
    size={"md"}
  >
    <motion.div
      whileHover={{ scale: 1.05, y: 5 }}
      style={{ position: "absolute" }}
      animate={{ rotate: -15, y: 10, x: -32, transition: { delay: 0.5 } }}
    >
      <Button bg={"whiteAlpha.200"} height={60} width={40}>
        <Image src={studentApp}></Image>
      </Button>
    </motion.div>
    <motion.div
      style={{ position: "absolute" }}
      animate={{ y: 10, transition: { delay: 0.5 } }}
      whileHover={{ scale: 1.05, y: 5 }}
    >
      <Button bg={"whiteAlpha.200"} height={60} width={40}>
        <Image src={API}></Image>
      </Button>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05, y: 5 }}
      style={{ position: "absolute" }}
      animate={{ rotate: 15, y: 10, x: 32, transition: { delay: 0.5 } }}
    >
      <Button bg={"whiteAlpha.200"} height={60} width={40}>
        <Image src={realEstateWebsite}></Image>
      </Button>
    </motion.div>
  </Card>
);

export default BaseProjectCard;
