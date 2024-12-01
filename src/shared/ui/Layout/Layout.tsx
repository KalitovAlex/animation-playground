import { ReactNode } from "react";
import { Header } from "./header/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
    </div>
  );
};
