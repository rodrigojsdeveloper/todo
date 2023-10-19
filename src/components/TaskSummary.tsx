'use client'
import { TaskContext } from '@/contexts/task.context'
import { useContext } from 'react'

const TaskSummary = () => {
  const { listLength, listCheckedLength } = useContext(TaskContext)

  return (
    <div className="mb-6 mt-16 flex flex-row items-center justify-between text-sm font-bold max-sm:mb-3 max-sm:mt-6">
      <div className="flex flex-row items-center justify-between gap-x-2">
        <p className="text-blue-200">Created Tasks</p>
        <span className="rounded-full bg-grey-400 px-2 py-0.5 font-extrabold">
          {listLength}
        </span>
      </div>

      <div className="flex flex-row items-center justify-between gap-x-2 text-sm">
        <p className="text-purple-200">Completed</p>
        <span className="rounded-full bg-grey-400 px-2 py-0.5 font-extrabold">
          {listCheckedLength > 0
            ? `${listCheckedLength} of ${listLength}`
            : listCheckedLength}
        </span>
      </div>
    </div>
  )
}

export default TaskSummary
