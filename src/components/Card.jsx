import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  console.log(imageSrc);
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image src={imageSrc} alt="" />
    </>
  );
};

export default Card;
