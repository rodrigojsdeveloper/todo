const TaskSummary = () => {
  return (
    <div className="flex flex-row justify-between items-center font-bold text-sm mt-16 mb-6">
      <div className="flex flex-row justify-between items-center gap-x-2">
        <p className="text-blue-200">Created Tasks</p>
        <span className="font-extrabold bg-grey-400 py-0.5 px-2 rounded-full">
          0
        </span>
      </div>

      <div className="flex flex-row justify-between items-center text-sm gap-x-2">
        <p className="text-purple-200">Completed</p>
        <span className="font-extrabold bg-grey-400 py-0.5 px-2 rounded-full">
          0
        </span>
      </div>
    </div>
  );
};

export default TaskSummary;
