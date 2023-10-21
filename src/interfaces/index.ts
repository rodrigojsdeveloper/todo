import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface ITaskProps {
  id: string
  title: string
  checked: boolean
}

export interface ITask {
  task: ITaskProps
}

export interface ITaskContextData {
  addTask: (task: ITaskProps) => void
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  list: Array<ITaskProps>
  listLength: number
  listCheckedLength: number
  toggleCheckbox: (task: ITaskProps) => void
  removeTask: (task: ITaskProps) => void
  handleSvgHover: () => void
  handleSvgHoverEnd: () => void
  handleCheckboxChange: (task: ITaskProps) => void
  svgRef: MutableRefObject<SVGSVGElement | null>
}

export interface InputProps {
  register: UseFormRegister<FieldValues>
}
