export default function ValidateConfirmPassword(value, password) {
  if (!value) {
    return "Confirm Password Required";
  } else if (value !== password) {
    return "New Password and Confirm Password Must be Same";
  } else {
    return "";
  }
}
