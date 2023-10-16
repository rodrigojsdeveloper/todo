import { Dispatch, SetStateAction } from "react";

export interface ITaskProps {
  title: string;
  checked: boolean;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ITaskContextData {
  addTask: (task: ITaskProps) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
