import { Box, Card, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  photos: string[];
  colorScheme: "gray" | "blackAlpha";
}

const ImageCarousel = ({ photos, colorScheme }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Card
      borderRadius={"lg"}
      minWidth={{ base: "unset", lg: "316px" }}
      minHeight={{ base: "unset", lg: "154px" }}
      height={{ base: "163px", lg: "unset" }}
      overflow={"hidden"}
      variant={"filled"}
      width={{ base: "335px", lg: "unset" }}
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
          colorScheme={colorScheme}
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
          colorScheme={colorScheme}
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
