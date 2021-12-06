export default function ValidateString(value, msg) {
  if (!value || value.trim() === "") {
    return msg;
  } else {
    return "";
  }
}
