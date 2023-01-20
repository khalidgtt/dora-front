import * as v from "./utils";

export const userProfileSchema: v.Schema = {
  firstName: {
    label: "Prénom",
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
    maxLength: 140,
    required: true,
    readonly: true,
  },
  lastName: {
    label: "Nom",
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
    maxLength: 140,
    required: true,
    readonly: true,
  },
  email: {
    label: "Courriel",
    default: "",
    rules: [v.isEmail(), v.maxStrLength(255)],
    post: [v.lower, v.trim],
    maxLength: 255,
    required: true,
    readonly: true,
  },
  phoneNumber: {
    label: "Numéro de téléphone",
    default: "",
    pre: [v.removeAllNonDigits],
    rules: [v.isPhone()],
    required: true,
    maxLength: 10,
  },
};