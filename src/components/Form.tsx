"use client";
import { TaskContext } from "@/contexts/task.context";
import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";

const Form = () => {
  const { addTask } = useContext(TaskContext);

  const { register, handleSubmit, reset } = useForm();

  const onSubmitFunction = (data: any) => {
    data.id = crypto.randomUUID();
    data.checked = false;
    addTask(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="h-54 flex justify-center gap-x-2 max-sm:h-50"
    >
      <Input register={register} />
      <Button />
    </form>
  );
};

export default Form;
