export default function ValidateEmail(value) {
  if (!value) {
    return "Email is Required";
  } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    return "Enter a valid email address";
  } else {
    return "";
  }
}
