import { ILogin } from "../../interfaces/validations/ILogin";

export const validateLogin = (input: ILogin) => {
  const errors = {};

  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  const passwordRegex = /^.{3,}$/;

  if (!emailRegex.test(input.email)) {
    errors.email = "no es correcto";
  }

  if (!passwordRegex.test(input.password)) {
    errors.password = "debe tener al menos 3 caracteres";
  }

  return errors;
};
