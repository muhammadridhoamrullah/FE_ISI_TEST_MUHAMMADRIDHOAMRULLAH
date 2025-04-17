import bcrypt from "bcryptjs";

export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};

export const comparePassword = (
  password: string,
  hashedPass: string
): boolean => {
  return bcrypt.compareSync(password, hashedPass);
};
