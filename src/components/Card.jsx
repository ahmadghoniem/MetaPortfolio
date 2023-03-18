import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <VStack borderRadius={5} background="white" textAlign="left">
      <Image src={imageSrc} alt="" borderRadius={5} />
      <VStack padding={2}>
        <Heading as="h4" size="sm" color="#2B2B2B">
          {title}
        </Heading>
        <Text fontSize="sm" color="#7B899C">
          {description}
        </Text>
        <a href={link} target="_blank">
          <Text fontSize="sm" color="#2B2B2B" float="bottom">
            visit website <FontAwesomeIcon size="sm" icon={faArrowRight} />
          </Text>
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
