export default function ValidateConfirmPassword(
  value,
  password,
  confirmPassword,
  confirmPasswordIsNotMatched
) {
  if (!value) {
    return confirmPassword;
  } else if (value !== password) {
    return confirmPasswordIsNotMatched;
  } else {
    return "";
  }
}
