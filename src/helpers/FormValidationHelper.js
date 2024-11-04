export const validateName = (name) => {
  return name.trim().length === 0;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.trim().length < 8;
};

export const validateConfirmPassword = (password) => {
  return password.trim().length < 8 && password === password;
};

export const validateNominal = (nominal) => {
  return nominal === "" || nominal <= 0 || nominal >= 1000000;
};
