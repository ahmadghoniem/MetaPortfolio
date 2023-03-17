import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: es-ahmed.ibrahim2018@alexu.edu.eg",
  },
  {
    icon: faGithub,
    url: "https://github.com/ahmadghoniem",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmad-ibrahim-8181091b3/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/2828694/ahmad-ghoneim",
  },
];
const socialElements = socials.map((e, i) => (
  <Box key={i}>
    <a href={e.url} target="_blank">
      <FontAwesomeIcon size="lg" icon={e.icon} />
    </a>
  </Box>
));
const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.hash;
    const destination = document.querySelector(id);
    if (destination) {
      destination.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
              justifyContent="space-between"
              spacing={5}
              alignItems="center"
            >
              {socialElements}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
