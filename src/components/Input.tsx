import { InputProps } from '@/interfaces'

const Input = ({ register }: InputProps) => {
  return (
    <input
      {...register('title')}
      placeholder="Add a new task"
      className="focus:border-purple-dark h-full w-full rounded-def border border-solid border-grey-700 bg-grey-500 p-4 placeholder:text-grey-300 focus:placeholder:text-transparent"
    />
  )
}

export default Input
