export default function ValidatePassword(
  value,
  passwordIsRequired,
  atLeast8Character,
  atLeastLowerCharacter,
  atLeastUpperCharacter,
  atLeastOneDigit
) {
  if (!value) {
    return passwordIsRequired;
  } else if (value.length < 8 || value.length > 15) {
    return atLeast8Character;
  } else if (!value.match(/[a-z]/g)) {
    return atLeastLowerCharacter;
  } else if (!value.match(/[A-Z]/g)) {
    return atLeastUpperCharacter;
  } else if (!value.match(/[0-9]/g)) {
    return atLeastOneDigit;
  } else {
    return "";
  }
}
