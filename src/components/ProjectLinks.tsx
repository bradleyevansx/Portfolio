import { Card, HStack, IconButton, Link } from "@chakra-ui/react";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

interface Props {
  githubLink: string;
  websiteLink: string;
}

const ProjectLinks = ({ githubLink, websiteLink }: Props) => {
  return (
    <Card margin={"20px auto"} padding={2} width={"fit-content"}>
      <HStack>
        <IconButton
          as={Link}
          target="_blank"
          href={githubLink}
          size={"lg"}
          aria-label="Git Hub"
          icon={<FaGithub size={30} />}
        />
        <IconButton
          as={Link}
          href={websiteLink}
          target="_blank"
          size={"lg"}
          aria-label="Linked In"
          icon={<AiOutlineLink size={30} />}
        />
      </HStack>
    </Card>
  );
};

export default ProjectLinks;
