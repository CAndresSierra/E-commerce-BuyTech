import { IRegister } from "../../interfaces/validations/IRegister";

export const validateRegister = (input: IRegister) => {
  const errors = {};

  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
  const nameRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{2,50}$/;
  const addressRegex = /^[a-zA-Z0-9\s,.-]{5,100}$/;
  const phoneRegex = /^.{5,}$/;

  if (!emailRegex.test(input.email)) {
    errors.email = "no es correcto";
  }

  if (!passwordRegex.test(input.password)) {
    errors.password =
      "Debe tener entre 8 a 16 caracteres, Debe contener al menos una letra (mayúscula o minúscula), debe contener al menos un numero";
  }

  if (!nameRegex.test(input.name)) {
    errors.name = "debe tener al menos 3 caracteres";
  }

  if (!addressRegex.test(input.address)) {
    errors.address = "debe tener al menos 5 caracteres";
  }

  if (!phoneRegex.test(input.phone)) {
    errors.phone = "debe tener al menos 6 caracteres";
  }

  return errors;
};
