import { Button, Card, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import API from "../assets/webApiPhotos/API.png";
import studentApp from "../assets/studentAppPhotos/startVertical.png";
import realEstateWebsite from "../assets/realEstateWebsitePhotos/RealEstateWebsite.png";
import { Link } from "react-router-dom";

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
      <Link to={"/projects/student-app"}>
        <Button bg={"whiteAlpha.200"} height={"370px"} width={"231px"}>
          <Image src={studentApp}></Image>
        </Button>
      </Link>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: 15 }}
      style={{ position: "absolute" }}
      animate={{ y: 20 }}
    >
      <Link to="/projects/web-api">
        <Button bg={"whiteAlpha.200"} height={"370px"} width={"231px"}>
          <Image src={API}></Image>
        </Button>
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05, y: 15 }}
      style={{ position: "absolute" }}
      animate={{ rotate: 15, y: 27, x: 49 }}
    >
      <Link to="/projects/realtor-website">
        <Button bg={"whiteAlpha.200"} height={"370px"} width={"231px"}>
          <Image src={realEstateWebsite}></Image>
        </Button>
      </Link>
    </motion.div>
  </Card>
);

export default MediumProjectCard;
