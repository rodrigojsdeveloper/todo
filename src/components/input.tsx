import { InputProps } from '@/interfaces'

export const Input = ({ register }: InputProps) => {
  return (
    <input
      {...register('title')}
      placeholder="Add a new task"
      className="h-full w-full rounded-def border border-solid border-gray-700 bg-gray-500 p-4 text-gray-100 placeholder:text-gray-300 focus:border-purple-dark focus:placeholder:text-transparent"
    />
  )
}
