export type Pretty<T extends object> = {
  [k in keyof T]: T[k];
};