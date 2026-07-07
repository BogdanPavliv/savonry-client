// In case you need to add elements with text. Added parameters: message, requireMessage

export const nameValidationRules = (
  message: string,
  requireMessage?: string
) => ({
  ...(requireMessage && { required: requireMessage }),
  pattern: {
    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
    message,
  },
  minLength: 2,
  maxLength: 15,
});

export const surnameValidationRules = (
  message: string,
  requireMessage?: string
) => ({
  ...(requireMessage && { required: requireMessage }),
  pattern: {
    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
    message,
  },
  minLength: 2,
  maxLength: 15,
});

export const emailValidationRules = (
  message: string,
  requireMessage?: string
) => ({
  ...(requireMessage && { required: requireMessage }),
  pattern: {
    value: /\S+@\S+\.\S+/,
    message,
  },
});

export const phoneValidationRules = (
  message: string,
  requireMessage?: string
) => ({
  ...(requireMessage && { required: requireMessage }),
  pattern: {
    value: /^(\+380|0)\s?\(?\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/,
    message,
  },
});