"use client"
import { TaskContext } from "@/contexts/task.context";
import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const { addTask, setIsLoading } = useContext(TaskContext);

  const handleSubmit = (data: any) => {
    setIsLoading(true);
    addTask(data);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-54 flex justify-center gap-x-2 max-sm:h-50"
    >
      <Input />
      <Button />
    </form>
  );
};

export default Form;
