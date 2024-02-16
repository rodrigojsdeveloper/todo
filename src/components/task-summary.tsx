'use client'
import { TaskContext } from '@/contexts/task.context'
import { useContext } from 'react'

const TaskSummary = () => {
  const { taskListLength, taskListCheckedLength } = useContext(TaskContext)

  return (
    <div className="mb-6 mt-16 flex flex-row items-center justify-between text-sm font-bold">
      <div className="flex flex-row items-center justify-between gap-x-2">
        <p className="text-blue-dark">Created Tasks</p>
        <span className="rounded-full bg-gray-400 px-2 py-0.5 font-extrabold">
          {taskListLength}
        </span>
      </div>

      <div className="flex flex-row items-center justify-between gap-x-2 text-sm">
        <p className="text-purple">Completed</p>
        <span className="rounded-full bg-gray-400 px-2 py-0.5 font-extrabold">
          {taskListCheckedLength > 0
            ? `${taskListCheckedLength} of ${taskListLength}`
            : taskListCheckedLength}
        </span>
      </div>
    </div>
  )
}

export default TaskSummary
