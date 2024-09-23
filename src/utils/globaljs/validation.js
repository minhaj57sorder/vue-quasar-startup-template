import { Notify, Loading, QSpinnerGears } from "quasar";

export const convertNumberIntoDecimal = function (num) {
  // Nine Zeroes for Billions
  return Math.abs(Number(num)) >= 1.0e9
    ? Number((Math.abs(Number(num)) / 1.0e9).toFixed(2)) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(num)) >= 1.0e6
      ? Number((Math.abs(Number(num)) / 1.0e6).toFixed(2)) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(num)) >= 1.0e3
        ? Number((Math.abs(Number(num)) / 1.0e3).toFixed(2)) + "K"
        : Math.abs(Number(num));
};

export const usernameRequired = (val) => {
  return (val && val.length > 0) ? true : "Required Feild";
};
export const passwordRequired = (val) => {
  return (val && val.length > 0) ? true : "Password Required";
};
export const required = (val) => {
  return (val && val.length > 0) ? true : "Required Feild";
};
export const requiredSelector = (val) => {
  return val ? true : "Required Feild";
};
export const zeroValue = (val) => {
  return val > 0 ? true : "This feild should be greater than zero";
};
export const fileValidate = (val) => {
  return val instanceof File ? true : "Please Attach File";
};
export const mobileNoBd = (val) => {
  if((val && val.length == 11)){
    return true
  }else if((val && val.length > 11)){
    return "Too Long. Accepting 11 charecter."
  }else{
    return "Too Short. Accepting 11 charecter."
  }
};
export const short = (val) => {
  return (val && val.length > 5) ? true : "Too Short";
};
export const strength = (val) => {
  const strength = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return strength.test(val) ? true : "Use Strong Password"
};

export const speachialUername = (val) => {
  const strength = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return strength.test(val) ? "Remove Speacial Charecter" : true
};
export const isEmail = (val) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) ? true : "Seems like not email address";
};
export const isObjEmpty=(obj)=> {
  return Object.keys(obj).length === 0;
}
export const addSessionEndTimeInMinutes = (d, minutes) => {
  const date = new Date(d)
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}
export const capitalizeText = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const quasarNotify = (notifData) => {
  return Notify.create(notifData);
};

export const quasarBackDropShow = (message, gearSpinner, bg) => {
  return Loading.show({
    spinnerSize: 140,
    spinnerColor: "white",
    ...(gearSpinner && { spinner: QSpinnerGears }),
    backgroundColor: bg || "primary",
    messageColor: "white",
    message: message,
  });
};

export const quasarBackDropHide = () => {
  return Loading.hide();
};
