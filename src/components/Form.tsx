import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form className="w-full max-w-3xl h-54 flex justify-center gap-x-2 -mt-6 mx-auto px-5">
      <Input />
      <Button />
    </form>
  );
};

export default Form;
