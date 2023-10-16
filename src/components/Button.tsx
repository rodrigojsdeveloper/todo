const Button = () => {
  return (
    <button
      type="submit"
      className="w-24 h-54 flex justify-between items-center bg-blue-500 border border-solid border-blue-500 font-bold rounded-def p-2.5 hover:bg-blue-800 hover:border-blue-800 active:bg-blue-900 active:border-blue-900"
    >
      Create
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></circle>
        <line
          x1="88"
          y1="128"
          x2="168"
          y2="128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="128"
          y1="88"
          x2="128"
          y2="168"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
    </button>
  );
};

export default Button;
