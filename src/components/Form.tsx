import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form className="h-54 flex justify-center gap-x-2 max-sm:h-50">
      <Input />
      <Button />
    </form>
  );
};

export default Form;
