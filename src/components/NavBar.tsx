import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import ColorModeSwitch from "./ColorModeSwitch";
import useViewportHeight from "../hooks/useViewportHeight";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cardVariants = {
    hidden: { x: -150, rotate: -90, opacity: 0 },
    visible: { x: 0, rotate: 0, opacity: 1 },
    exit: { x: -150, rotate: -90, opacity: 0 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const availableHeight = useViewportHeight();

  const isMedium = () => useBreakpointValue({ base: false, lg: true });

  const [isReallyOpen, setIsReallyOpen] = useState(false); // Create a state variable

  useEffect(() => {
    if (!isOpen) {
      // Activate the timeout only if isOpen is changing from true to false
      const timeout = setTimeout(() => {
        setIsReallyOpen(isOpen); // Update isReallyOpen after the delay
      }, 500);

      return () => {
        clearTimeout(timeout); // Clear the timeout if the component unmounts or isOpen changes before the delay
      };
    } else {
      setIsReallyOpen(isOpen); // Update isReallyOpen immediately for other cases
    }
  }, [isOpen]);

  const placement = isMedium() ? "left" : "top";
  return (
    <>
      <ColorModeSwitch></ColorModeSwitch>
      <HStack
        width={"100vw"}
        height={availableHeight}
        alignItems={{ base: "start", lg: "center" }}
        justifyContent={{ base: "end", lg: "start" }}
        position={"absolute"}
        padding={5}
      >
        <IconButton
          zIndex={"101"}
          display={isOpen ? "none" : "inherit"}
          icon={<HamburgerIcon></HamburgerIcon>}
          onClick={onOpen}
          aria-label={""}
        ></IconButton>
      </HStack>
      {isReallyOpen ? (
        <motion.div
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "exit"}
          style={{
            paddingLeft: "20px",
            pointerEvents: "all",
            zIndex: "1000",
            height: availableHeight,
            background: "rgba(17,17, 17, .8)",
            display: "flex",
            paddingTop: "20px",
            position: "absolute",
            width: "100vw",
            alignItems: placement == "left" ? "center" : "start",
            justifyContent: placement == "left" ? "start" : "center",
          }}
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "exit"}
          >
            <Card display={"flex"} gap={2} width={"fit-content"} padding={2}>
              <Button
                size={"lg"}
                leftIcon={<FaHome size={25} />}
                aria-label={""}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                size={"lg"}
                leftIcon={<LiaProjectDiagramSolid size={25} />}
                aria-label={""}
              >
                <Link to="/projects">Projects</Link>
              </Button>
              <Button
                size={"lg"}
                leftIcon={<HiOutlineMail size={25} />}
                aria-label={""}
              >
                Email Me
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default NavBar;
