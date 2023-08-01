import { Card, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialsCard = () => {
  return (
    <Card margin={"20px auto 0 auto"} padding={2} width={"fit-content"}>
      <HStack>
        <IconButton
          size={"lg"}
          aria-label="Linked In"
          icon={<FaLinkedin size={30} />}
        />
        <IconButton
          size={"lg"}
          aria-label="Linked In"
          icon={<FaGithub size={30} />}
        />
        <IconButton
          size={"lg"}
          aria-label="Linked In"
          icon={<FaInstagram size={30} />}
        />
      </HStack>
    </Card>
  );
};

export default SocialsCard;
