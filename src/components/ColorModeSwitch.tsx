import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const [availableHeight, setAvailableHeight] = useState(0);
  const { height: windowHeight } = useWindowSize();

  useEffect(() => {
    const addressBarHeight = windowHeight - window.innerHeight;
    setAvailableHeight(window.innerHeight - addressBarHeight);
  }, [windowHeight]);

  return (
    <VStack
      height={availableHeight}
      width={"fit-content"}
      padding={5}
      position={"absolute"}
      justifyContent="end"
    >
      <IconButton
        zIndex={"100"}
        icon={
          colorMode === "dark" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>
        }
        onClick={toggleColorMode}
        aria-label={"Toggle Color Mode"}
      ></IconButton>
    </VStack>
  );
};

export default ColorModeSwitch;
