'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { TaskProps, TaskContextData } from '../interfaces'

export const TaskContext = createContext({} as TaskContextData)

export const TaskContextProvider = ({ children }: PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined'
  const localStorageKey = 'ToDo: taskList'

  const [taskList, setTaskList] = useState<TaskProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [taskListCheckedLength, setTaskListCheckedLength] = useState<number>(0)
  const [taskListLength, setTaskListLength] = useState<number>(0)

  const saveListToLocalStorage = (updatedList: TaskProps[]) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList))
      setTaskList(updatedList)
      setTaskListLength(updatedList.length)
      setTaskListCheckedLength(
        updatedList.filter((task: TaskProps) => task.checked).length,
      )
    }
  }

  const loadListFromLocalStorage = () => {
    const storedList = localStorage.getItem(localStorageKey)
    if (storedList) {
      return JSON.parse(storedList)
    }
    return []
  }

  const handleAddTask = (task: TaskProps) => {
    const updatedList = [task, ...taskList]
    saveListToLocalStorage(updatedList)
  }

  const handleRemoveTask = (task: TaskProps) => {
    const updatedList = taskList.filter((t: TaskProps) => t.id !== task.id)
    saveListToLocalStorage(updatedList)
  }

  const toggleCheckbox = (task: TaskProps) => {
    const updatedTask = { ...task, checked: !task.checked }
    const updatedList = taskList.map((t) =>
      t.id === task.id ? updatedTask : t,
    )

    saveListToLocalStorage(updatedList)
  }

  const handleCheckboxChange = (task: TaskProps) => {
    toggleCheckbox(task)
  }

  useEffect(() => {
    setIsLoading(true)

    const storedList = loadListFromLocalStorage()
    setTaskList(storedList)
    setTaskListLength(storedList.length)
    setTaskListCheckedLength(
      storedList.filter((task: TaskProps) => task.checked).length,
    )

    setIsLoading(false)
  }, [])

  const taskContextData: TaskContextData = {
    handleAddTask,
    isLoading,
    setIsLoading,
    taskList,
    taskListLength,
    taskListCheckedLength,
    toggleCheckbox,
    handleRemoveTask,
    handleCheckboxChange,
  }

  return (
    <TaskContext.Provider value={taskContextData}>
      {children}
    </TaskContext.Provider>
  )
}
