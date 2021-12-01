export default function ValidateString(value) {
  if (!value || value.trim() === "") {
    return "Contact name is Required";
  } else {
    return "";
  }
}
