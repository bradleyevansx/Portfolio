import { Box, Card, IconButton, Image } from "@chakra-ui/react";
import login from "../assets/studentAppPhotos/login.png";
import detailView from "../assets/studentAppPhotos/detailView.png";
import listView from "../assets/studentAppPhotos/listView.png";
import startHorizontal from "../assets/studentAppPhotos/startHorizontal.png";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [login, detailView, listView, startHorizontal];

  return (
    <Card
      borderRadius={"lg"}
      size={{ base: "unset", lg: "lg" }}
      height={{ base: "163px", lg: "initial" }}
      overflow={"hidden"}
      variant={"filled"}
      width={{ base: "335px", lg: "initial" }}
    >
      <Box
        height={"100%"}
        alignItems="center"
        padding={1}
        display={"flex"}
        width="100%"
        position={"absolute"}
      >
        <IconButton
          display={currentIndex === 0 ? "none" : "flex"}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          size={"xs"}
          isRound={true}
          variant="solid"
          aria-label="Done"
          fontSize="20px"
          icon={<ChevronLeftIcon />}
        />
        <IconButton
          display={currentIndex + 1 === photos.length ? "none" : "flex"}
          ms="auto"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          size={"xs"}
          isRound={true}
          variant="solid"
          aria-label="Done"
          fontSize="20px"
          icon={<ChevronRightIcon />}
        />
      </Box>
      <Image src={photos[currentIndex]}></Image>
    </Card>
  );
};

export default ImageCarousel;
