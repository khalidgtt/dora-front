import * as v from "./utils";

export const addUserSchema = {
  email: {
    label: "Courriel",
    default: "",
    rules: [v.isEmail(), v.maxStrLength(255)],
    post: [v.lower, v.trim],
    maxLength: 255,
    required: true,
  },
  level: {
    label: "Permissions",
    default: "",
    rules: [
      v.isString(),
      (name, value, _data) => ({
        valid: value === "user" || value === "admin",
        msg: `Choix incorrect`,
      }),
    ],
    required: true,
  },
};

export const modifyUserSchema = {
  name: {
    label: "Nom",
    default: "",
    rules: [v.isString(), v.maxStrLength(255)],
    post: [v.trim],
    maxLength: 255,
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
  level: {
    label: "Permissions",
    default: "",
    rules: [
      v.isString(),
      (name, value, _data) => ({
        valid: value === "user" || value === "admin",
        msg: `Choix incorrect`,
      }),
    ],
    required: true,
  },
};