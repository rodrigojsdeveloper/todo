"use client";
import { ITaskProps, ITaskContextData, IChildren } from "../interfaces";
import { Dispatch, createContext, useEffect, useState } from "react";

export const TaskContext = createContext({} as ITaskContextData);

export const TaskContextProvider = ({ children }: IChildren) => {
  const [list, setList] = useState<Array<ITaskProps>>([]);

  const [listLength, setListLength] = useState<number>(0);

  const [listCheckedLength, setListCheckedLength] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addTask = (task: ITaskProps) => {
    setList([task, ...list]);
    localStorage.setItem("ToDo: list", JSON.stringify([task, ...list]));
  };

  const loadListFromLocalStorage = () => {
    const storedList = localStorage.getItem("ToDo: list");
    if (storedList) {
      return JSON.parse(storedList);
    }
    return [];
  };

  const toggleCheckbox = (
    task: ITaskProps,
    setIsChecked: Dispatch<React.SetStateAction<boolean>>,
    isChecked: boolean
  ) => {
    task.checked = !task.checked;
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const list = loadListFromLocalStorage();

    setList(list);
    setListLength(list.length);
    setListCheckedLength(
      list.filter((task: ITaskProps) => task.checked === true).length
    );
  }, []);

  return (
    <TaskContext.Provider
      value={{
        addTask,
        isLoading,
        setIsLoading,
        list,
        listLength,
        listCheckedLength,
        toggleCheckbox,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
