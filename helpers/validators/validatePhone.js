export default function ValidatePhone(value) {
  if (!value || value.trim() === "") {
    return "Phone number is Required";
  } else if (
    !value.match(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/)
  ) {
    return "Enter a valid Phone number.";
  } else {
    return "";
  }
}
