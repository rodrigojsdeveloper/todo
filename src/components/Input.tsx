import { InputProps } from '@/interfaces'

const Input = ({ register }: InputProps) => {
  return (
    <input
      {...register('title')}
      placeholder="Add a new task"
      className="h-full w-full rounded-def border border-solid border-grey-500 bg-grey-500 p-4 placeholder:text-grey-300 focus:border-blue-200 focus:placeholder:text-transparent max-sm:py-2"
    />
  )
}

export default Input
