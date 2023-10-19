import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  previousPassword: yup
    .string()
    .min(6)
    .max(32)
    .required("Old Password is required"),
  newPassword: yup.string().min(6).max(32).required("New Password is required"),
});
