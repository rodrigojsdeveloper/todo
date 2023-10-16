const Task = () => {
  return (
    <div className="w-full h-14 flex flex-row justify-between items-center bg-grey-500 rounded-def p-5">
      <div className="flex flex-row items-center gap-x-4">
        <input
          type="radio"
          className="w-4 h-4 bg-transparent border-2 border-solid border-blue-200 rounded-full appearance-none place-content-center cursor-pointer"
        />
        <h2 className="font-normal text-sm">Name</h2>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="cursor-pointer"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="216"
          y1="56"
          x2="40"
          y2="56"
          fill="none"
          stroke="#808080"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="104"
          y1="104"
          x2="104"
          y2="168"
          fill="none"
          stroke="#808080"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="152"
          y1="104"
          x2="152"
          y2="168"
          fill="none"
          stroke="#808080"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
          fill="none"
          stroke="#808080"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <path
          d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
          fill="none"
          stroke="#808080"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    </div>
  );
};

export default Task;
