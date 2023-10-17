"use client";
import { TaskContext } from "@/contexts/task.context";
import EmptyMessage from "./EmptyMessage";
import { useContext } from "react";
import Task from "./Task";

const List = () => {
  const { list } = useContext(TaskContext);

  return (
    <menu className="w-full h-335 flex flex-col gap-y-3 overflow-y-auto max-sm:gap-y-2">
      {list !== null && list.length > 0 ? (
        list.map((task, index) => <Task key={index} task={task} />)
      ) : (
        <EmptyMessage />
      )}
    </menu>
  );
};

export default List;
