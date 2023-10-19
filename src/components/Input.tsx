import { TaskContext } from '@/contexts/task.context'
import { InputProps } from '@/interfaces'
import { useContext } from 'react'

const Input = ({ register }: InputProps) => {
  const { setIsLoading } = useContext(TaskContext)

  return (
    <input
      {...register('title')}
      onChange={(e) =>
        e.target.value.length > 0 ? setIsLoading(false) : setIsLoading(true)
      }
      placeholder="Add a new task"
      className="h-full w-full rounded-def border border-solid border-grey-500 bg-grey-500 p-4 placeholder:text-grey-300 focus:border-blue-200 focus:placeholder:text-transparent max-sm:py-2"
    />
  )
}

export default Input
