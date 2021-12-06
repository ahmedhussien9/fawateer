const RTL = "rtl";
const LTR = "ltr";
const RTL_LOCAL = "ar";
const LTR_LOCAL = "en-US";

export const handleChanageLang = (locale) => {
  if (window !== undefined) {
    setNewLang(locale);
    setNewDir(locale);
  }
};

const setNewLang = (locale) => {
  localStorage.setItem("lang", locale);
};

const setNewDir = (locale) => {
  console.log(locale);
  switch (locale) {
    case RTL_LOCAL:
      changeDocumentDir(RTL);
      break;
    case LTR_LOCAL:
      changeDocumentDir(LTR);
      break;
    default:
      changeDocumentDir(RTL);
      break;
  }
};

const changeDocumentDir = (dir) => {
  document.body.dir = dir;
  document.body.style.direction = dir;
};
