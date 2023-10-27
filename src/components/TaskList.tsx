'use client'
import { TaskContext } from '@/contexts/task.context'
import EmptyMessage from './EmptyMessage'
import { useContext } from 'react'
import Loading from './Loading'
import Task from './Task'

const TaskList = () => {
  const { taskList, isLoading } = useContext(TaskContext)

  return (
    <menu className="flex h-335 w-full flex-col gap-y-3 overflow-y-auto pb-0.5 max-sm:gap-y-2">
      {isLoading ? (
        <Loading />
      ) : taskList.length > 0 ? (
        taskList.map((task, index) => <Task key={index} task={task} />)
      ) : (
        <EmptyMessage />
      )}
    </menu>
  )
}

export default TaskList
