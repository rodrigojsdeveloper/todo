'use client'
import { TaskContext } from '@/contexts/task.context'
import EmptyMessage from './EmptyMessage'
import { useContext } from 'react'
import Loading from './Loading'
import Task from './Task'

const TaskList = () => {
  const { list, isLoading } = useContext(TaskContext)

  return (
    <menu className="flex h-335 w-full flex-col gap-y-3 overflow-y-auto max-sm:gap-y-2">
      {isLoading ? (
        <Loading />
      ) : list.length > 0 ? (
        list.map((task, index) => <Task key={index} task={task} />)
      ) : (
        <EmptyMessage />
      )}
    </menu>
  )
}

export default TaskList
