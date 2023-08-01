import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  Drawer,
  DrawerContent,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMedium = () => useBreakpointValue({ base: false, lg: true });

  const placement = isMedium() ? "left" : "top";
  return (
    <>
      <ColorModeSwitch></ColorModeSwitch>
      <HStack
        width={"100vw"}
        height={"100vh"}
        alignItems={{ base: "start", lg: "center" }}
        justifyContent={{ base: "end", lg: "start" }}
        position={"absolute"}
        padding={5}
      >
        <IconButton
          display={isOpen ? "none" : "inherit"}
          icon={<HamburgerIcon></HamburgerIcon>}
          onClick={onOpen}
          aria-label={""}
        ></IconButton>
      </HStack>
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerContent
          width={{ base: "fit-content", lg: "fit-content" }}
          height={{ base: "fit-content", lg: "fit-content" }}
          margin={{ base: "10px auto ", lg: "auto 10px" }}
          shadow={"none"}
          bg={"unset"}
        >
          <Card
            margin={{ base: "auto", lg: "auto 10px" }}
            display={"flex"}
            gap={2}
            width={"fit-content"}
            padding={2}
          >
            <Button size={"lg"} leftIcon={<FaHome size={25} />} aria-label={""}>
              Home
            </Button>
            <Button
              size={"lg"}
              leftIcon={<LiaProjectDiagramSolid size={25} />}
              aria-label={""}
            >
              Projects
            </Button>
            <Button
              size={"lg"}
              leftIcon={<HiOutlineMail size={25} />}
              aria-label={""}
            >
              Email Me
            </Button>
          </Card>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
