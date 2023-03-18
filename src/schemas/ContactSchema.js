import * as Yup from "yup";
export const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("name field is required"),
  email: Yup.string()
    .email("please enter a valid email address")
    .required("email address is required"),
  comment: Yup.string().required("comment field is required"),
  type: Yup.string()
    .oneOf(["hireMe", "openSource", "other"])
    .required("Please indicate your type of inquiry"),
});
