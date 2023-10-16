import { TaskContextProvider } from "./task.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <TaskContextProvider>{children}</TaskContextProvider>;
};

export { Providers };
