import { compare, hash } from "bcryptjs";

const hashedPassword = async (password) => {
  const hashPassword = hash(password, 15);
  return hashPassword;
};

const verifyPassword = (password, hashPassword) => {
  const isValid = compare(password, hashPassword);
  return isValid;
};

export { hashedPassword, verifyPassword };
