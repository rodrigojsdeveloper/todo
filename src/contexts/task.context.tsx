"use client";
import { ITaskProps, ITaskContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext({} as ITaskContextData);

export const TaskContextProvider = ({ children }: IChildren) => {
  const isBrower = typeof window !== "undefined";

  const getList: ITaskProps[] = [];

  const [list, setList] = useState<Array<ITaskProps>>(getList);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addTask = (task: ITaskProps) => setList([task, ...list]);

  return (
    <TaskContext.Provider
      value={{
        addTask,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
