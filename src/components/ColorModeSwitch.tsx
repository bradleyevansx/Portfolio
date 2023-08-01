import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, VStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <VStack
      height={"100vh"}
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
