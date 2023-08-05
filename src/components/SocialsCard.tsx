import { Card, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { RiFilePaperLine } from "react-icons/ri";

const SocialsCard = () => {
  return (
    <Card margin={"20px auto 0 auto"} padding={2} width={"fit-content"}>
      <HStack>
        <IconButton
          as={Link}
          href={
            "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          }
          target="_blank"
          size={"lg"}
          aria-label="Linked In"
          icon={<FaLinkedin size={30} />}
        />
        <IconButton
          as={Link}
          target="_blank"
          href={"https://github.com/bradleyevansx"}
          size={"lg"}
          aria-label="Git Hub"
          icon={<FaGithub size={30} />}
        />
        <IconButton
          as={Link}
          target="_blank"
          href={"https://www.instagram.com/bradleyevans.x/"}
          size={"lg"}
          aria-label="Instagram"
          icon={<FaInstagram size={30} />}
        />
        <IconButton
          as={Link}
          target="_blank"
          href={
            "https://github.com/bradleyevansx/Resume/blob/main/Resume-1.pdf"
          }
          size={"lg"}
          aria-label="Resume"
          icon={<RiFilePaperLine size={30} />}
        />
      </HStack>
    </Card>
  );
};

export default SocialsCard;
