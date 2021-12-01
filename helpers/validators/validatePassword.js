export default function ValidatePassword(value) {
  if (!value) {
    return "Password is Required";
  } else if (value.length < 8 || value.length > 15) {
    return "Please fill at least 8 character";
  } else if (!value.match(/[a-z]/g)) {
    return "Please enter at least lower character.";
  } else if (!value.match(/[A-Z]/g)) {
    return "Please enter at least upper character.";
  } else if (!value.match(/[0-9]/g)) {
    return "Please enter at least one digit.";
  } else {
    return "";
  }
}
