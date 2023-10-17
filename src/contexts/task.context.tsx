"use client";
import { ITaskProps, ITaskContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext({} as ITaskContextData);

export const TaskContextProvider = ({ children }: IChildren) => {
  const isBrowser = typeof window !== "undefined";
  const localStorageKey = "ToDo: list";

  const [list, setList] = useState<Array<ITaskProps>>([]);

  const [listLength, setListLength] = useState<number>(0);

  const [listCheckedLength, setListCheckedLength] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const saveListToLocalStorage = (updatedList: ITaskProps[]) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
    }
  };

  const loadListFromLocalStorage = () => {
    const storedList = localStorage.getItem(localStorageKey);
    if (storedList) {
      return JSON.parse(storedList);
    }
    return [];
  };

  const addTask = (task: ITaskProps) => {
    const updatedList = [task, ...list];
    setList(updatedList);
    saveListToLocalStorage(updatedList);
  };

  const removeTask = (task: ITaskProps) => {
    const updatedList = list.filter((t: ITaskProps) => t.id !== task.id);
    setList(updatedList);
    saveListToLocalStorage(updatedList);
  };

  const toggleCheckbox = (task: ITaskProps) => {
    const updatedTask = { ...task, checked: !task.checked };
    const updatedList = list.map((item) =>
      item.id === task.id ? updatedTask : item
    );

    setList(updatedList);
    saveListToLocalStorage(updatedList);
  };

  useEffect(() => {
    const storedList = loadListFromLocalStorage();
    setList(storedList);
    setListLength(list.length);
    setListCheckedLength(
      list.filter((task: ITaskProps) => task.checked).length
    );
  }, [list]);

  const taskContextData = {
    addTask,
    isLoading,
    setIsLoading,
    list,
    listLength,
    listCheckedLength,
    toggleCheckbox,
    removeTask,
  };

  return (
    <TaskContext.Provider value={taskContextData}>
      {children}
    </TaskContext.Provider>
  );
};
