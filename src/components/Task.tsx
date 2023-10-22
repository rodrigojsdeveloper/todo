'use client'
import { TaskContext } from '@/contexts/task.context'
import React, { useContext, useRef } from 'react'
import { ITask } from '@/interfaces'

const Task = ({ task }: ITask) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  const { removeTask, handleCheckboxChange } = useContext(TaskContext)

  const handleSvgHover = () => {
    const svgElements = svgRef.current?.querySelectorAll<
      SVGPathElement | SVGLineElement
    >('path, line')
    if (svgElements) {
      svgElements.forEach((element) => {
        element.style.stroke = '#E25858'
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
    <div className="flex h-14 w-full flex-row items-center justify-between rounded-def bg-grey-500 p-5">
      <div className="flex flex-row items-center gap-x-4">
        <input
          id={`checked-${task.title}`}
          type="checkbox"
          checked={task.checked}
          onChange={() => handleCheckboxChange(task)}
          className="input h-4 w-4 cursor-pointer appearance-none place-content-center rounded-full border-2 border-solid border-blue-200 bg-transparent checked:bg-blue-200"
        />
        <label
          className={`text-sm font-normal ${
            task.checked
              ? 'text-greyChecked line-through'
              : 'text-grey-100 no-underline'
          }`}
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
        className="cursor-pointer"
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

export default Task
