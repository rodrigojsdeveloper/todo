import { Dispatch, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface TaskProps {
  id: string
  title: string
  checked: boolean
}

export interface ITask {
  task: TaskProps
}

export interface TaskContextData {
  handleAddTask: (task: TaskProps) => void
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  taskList: TaskProps[]
  taskListLength: number
  taskListCheckedLength: number
  toggleCheckbox: (task: TaskProps) => void
  handleRemoveTask: (task: TaskProps) => void
  handleCheckboxChange: (task: TaskProps) => void
}

export interface InputProps {
  register: UseFormRegister<FieldValues>
}
