import { TaskContext } from "@/contexts/task.context";
import { InputProps } from "@/interfaces";
import { useContext } from "react";

const Input = ({ register }: InputProps) => {
  const { setIsLoading } = useContext(TaskContext);

  return (
    <input
      {...register("title")}
      onChange={(e) =>
        e.target.value.length > 0 ? setIsLoading(false) : setIsLoading(true)
      }
      placeholder="Add a new task"
      className="w-full max-w-screen-sm h-full bg-grey-500 border border-solid border-grey-500 rounded-def p-4 focus:border-blue-200 focus:placeholder:text-transparent placeholder:text-grey-300 max-sm:py-2"
    />
  );
};

export default Input;
