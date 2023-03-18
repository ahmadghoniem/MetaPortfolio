import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" src="../images/avatar.png" name="ahmad ibrahim" />
      <Heading as="h6">hello, i'm Ahmad!</Heading>
      <Heading as="h1" size="md">
        An experienced React developer with expertise in creating responsive and
        dynamic user interfaces
      </Heading>
      <Heading as="h1" size="md">
        utilizing React's ecosystem to build scalable and maintainable web
        applications.
      </Heading>
      <Heading as="h1" size="md">
        Passionate about writing clean, efficient, and intuitive code that
        delivers a great user experience!
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
