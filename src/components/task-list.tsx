'use client'

import { useContext } from 'react'
import { TaskContext } from '@/contexts/task.context'
import { EmptyMessage } from './empty-message'
import { Loading } from './loading'
import { Task } from './task'

export const TaskList = () => {
  const { taskList, isLoading } = useContext(TaskContext)

  return (
    <menu className="flex h-[22rem] w-full flex-col gap-y-2 overflow-y-auto pb-0.5 sm:gap-y-3">
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
