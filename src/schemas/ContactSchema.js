import * as Yup from "yup";
export const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("name field is required"),
  email: Yup.string()
    .email("please enter a valid email address")
    .required("email address is required"),
  comment: Yup.string()
    .min(25, "Must be at least 25 characters")
    .max(250, "Must be at less than 250 characters")
    .required("comment field is required"),
  type: Yup.string()
    .oneOf(["hireMe", "openSource", "other"])
    .required("Please indicate your type of inquiry"),
});
