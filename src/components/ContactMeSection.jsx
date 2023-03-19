import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { ContactSchema } from "../schemas/ContactSchema";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
    resetForm,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      console.log(JSON.stringify(values, null, 2));
      submit("url", values);
      /*       onOpen(response.type, response.message);
      actions.resetForm(); */
    },
    validationSchema: ContactSchema,
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        resetForm();
      }
    }
  }, [response]);

  let { firstName, email, type, comment } = values;
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.firstName && touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...getFieldProps("firstName")}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...getFieldProps("email")}
                />
                <FormHelperText color="white">
                  We'll never share your email.
                </FormHelperText>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.type && touched.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...getFieldProps("type")}>
                  <option style={{ background: "#512DA8" }} value="">
                    --please select--
                  </option>
                  <option style={{ background: "#512DA8" }} value="hireMe">
                    Freelance project proposal
                  </option>
                  <option style={{ background: "#512DA8" }} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={{ background: "#512DA8" }} value="other">
                    Other
                  </option>
                </Select>
                <FormErrorMessage>{errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.comment && touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  maxLength={250}
                  /*onChange={handleChange}
                  onBlur={handleBlur}
                  value={comment} */
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
