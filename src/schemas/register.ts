import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  name: yup.string().required("Name is required"),
  contactNo: yup.string().required("contact No is required"),
  address: yup.string().required("address is required"),
});
