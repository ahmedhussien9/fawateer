export default function ValidateEmail(value, emailIsRequired, emailIsNotValid) {
  if (!value) {
    return emailIsRequired;
  } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    return emailIsNotValid;
  } else {
    return "";
  }
}
