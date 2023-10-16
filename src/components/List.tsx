import EmptyMessage from "./EmptyMessage";
import Task from "./Taskt";

const List = () => {
  return (
    <menu className="w-full h-335 flex flex-col gap-y-3 overflow-y-auto max-sm:gap-y-2">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </menu>
  );
};

export default List;
