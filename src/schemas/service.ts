import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  location: yup.string().required("Location No is required"),
  price: yup.string().required("Price is required"),
  serviceStatus: yup.string().required("Service Status is required"),
});
