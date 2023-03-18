import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Tenzies App",
    description:
      "The Tenzies game App is a React project built from scratch as part of the Scrimba React course. it includes a leaderboard that display ranking based on number of rolls, taken time or both!",
    imageSrc: "../images/1.jpg",
    link: "https://tenziesgho.vercel.app/",
  },
  {
    title: "Notes App",
    description:
      "The Notes App is a React project built from scratch as part of the Scrimba React course. It includes features such as creating, updating, and deleting notes, as well as the ability to change the theme and note name.",
    imageSrc: "../images/2.jpg",
    link: "https://notesappgho.vercel.app/",
  },
  {
    title: "Quizzical App",
    description: `Built using React from scratch as part of scrimba course, the Quizzical App lets you customize the number of questions, difficulty, and category. You can also choose whether to reveal the answers before or after answering all the questions. Additionally, you can star questions and take a quiz solely with them!. `,
    imageSrc: "../images/3.jpg",
    link: "https://quizzicalgho.vercel.app/",
  },
  {
    title: "Chesters NFT",
    description:
      "built with React from scratch 𝕮𝖍𝖊𝖘𝖙𝖊𝖗𝖘 is a Community driven NFT project that's still in the making where you get to pick which NFTs will be purchased with project's funds and airdropped back to holderss from top tier projects to small buildooors! you can take a sneakpeak on how the revealing process would be after the mint",
    imageSrc: "../images/4.jpg",
    link: "https://chesters.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#019689"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
