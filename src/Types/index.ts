import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPaths[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TLogin = {
  id: string;
  password: string;
};
