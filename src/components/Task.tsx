'use client'

import React, { useContext, useRef } from 'react'
import { TaskContext } from '@/contexts/task.context'
import { ITask } from '@/interfaces'
import { cn } from '@/utils/cn'

export const Task = ({ task }: ITask) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  const { removeTask, handleCheckboxChange } = useContext(TaskContext)

  const handleSvgHover = () => {
    const svgElements = svgRef.current?.querySelectorAll<
      SVGPathElement | SVGLineElement
    >('path, line')
    if (svgElements) {
      svgElements.forEach((element) => {
        element.style.stroke = '#E25858'
        element.style.transition = '0.3s'
      })
    }
  }

  const handleSvgHoverEnd = () => {
    const svgElements = svgRef.current?.querySelectorAll<
      SVGPathElement | SVGLineElement
    >('path, line')
    if (svgElements) {
      svgElements.forEach((element) => {
        element.style.stroke = '#808080'
      })
    }
  }

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
            'text-pretty w-full max-w-[39.5rem] text-sm font-normal',
            task.checked
              ? 'text-gray-300 line-through'
              : 'text-gray-100 no-underline',
          )}
          htmlFor={`checked-${task.title}`}
        >
          {task.title}
        </label>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="mt-0.5 min-w-[1.125rem] cursor-pointer"
        onMouseEnter={handleSvgHover}
        onMouseLeave={handleSvgHoverEnd}
        ref={svgRef}
        onClick={() => removeTask(task)}
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="216"
          y1="56"
          x2="40"
          y2="56"
          fill="none"
          stroke="#808080"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="104"
          x2="104"
          y2="168"
          fill="none"
          stroke="#808080"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="152"
          y1="104"
          x2="152"
          y2="168"
          fill="none"
          stroke="#808080"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
          fill="none"
          stroke="#808080"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
          fill="none"
          stroke="#808080"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </svg>
    </div>
  )
}
