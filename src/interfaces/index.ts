import { Dispatch, SetStateAction } from "react";

export interface ITaskProps {
  title: string;
  checked: boolean;
}

export interface ITask {
  task: ITaskProps;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ITaskContextData {
  addTask: (task: ITaskProps) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  list: Array<ITaskProps>;
  listLength: number;
  listCheckedLength: number;
  toggleCheckbox: (
    task: ITaskProps,
    setIsChecked: Dispatch<React.SetStateAction<boolean>>,
    isChecked: boolean
  ) => void;
}

export interface InputProps {
  register: any;
}
