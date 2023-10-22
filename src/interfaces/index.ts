import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Dispatch, SetStateAction } from 'react'

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
  taskList: ITaskProps[]
  taskListLength: number
  taskListCheckedLength: number
  toggleCheckbox: (task: ITaskProps) => void
  removeTask: (task: ITaskProps) => void
  handleCheckboxChange: (task: ITaskProps) => void
}

export interface InputProps {
  register: UseFormRegister<FieldValues>
}
