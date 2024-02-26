'use client'

import React, { useContext } from 'react'
import { TaskContext } from '@/contexts/task.context'
import { ITask } from '@/interfaces'
import { cn } from '@/utils/cn'
import { Trash2 } from 'lucide-react'

export const Task = ({ task }: ITask) => {
  const { handleRemoveTask, handleCheckboxChange } = useContext(TaskContext)

  return (
    <div
      className={cn(
        'flex w-full flex-row justify-between gap-x-4 rounded-def border border-solid border-gray-400 bg-gray-500 p-4 duration-200',
        task.checked ? 'border-gray-500' : 'border-gray-400',
      )}
    >
      <div className="flex flex-row gap-x-4">
        <input
          id={`checked-${task.title}`}
          type="checkbox"
          checked={task.checked}
          onChange={() => handleCheckboxChange(task)}
          className="input mt-0.5 h-[1.091rem] min-w-[1.091rem] cursor-pointer appearance-none place-content-center rounded-full border-2 border-solid border-blue bg-transparent bg-[55%] bg-no-repeat checked:border-purple-dark checked:bg-purple-dark hover:border-blue-dark hover:bg-blue/20 checked:hover:border-purple checked:hover:bg-purple"
        />
        <label
          className={cn(
            'w-full max-w-[39.5rem] text-pretty text-sm font-normal',
            task.checked
              ? 'text-gray-300 line-through'
              : 'text-gray-100 no-underline',
          )}
          htmlFor={`checked-${task.title}`}
        >
          {task.title}
        </label>
      </div>
      <Trash2
        size={18}
        className="cursor-pointer text-gray-300 duration-300 hover:text-[#E25858]"
        onClick={() => handleRemoveTask(task)}
      />
    </div>
  )
}
