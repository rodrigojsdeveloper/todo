'use client'
import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { ITaskProps, ITaskContextData } from '../interfaces'

const TaskContext = createContext({} as ITaskContextData)

const TaskContextProvider = ({ children }: PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined'
  const localStorageKey = 'ToDo: taskList'

  const [taskList, setTaskList] = useState<ITaskProps[]>([])

  const [taskListLength, setTaskListLength] = useState<number>(0)

  const [taskListCheckedLength, setTaskListCheckedLength] = useState<number>(0)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const saveListToLocalStorage = (updatedList: ITaskProps[]) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList))
      setTaskList(updatedList)
      setTaskListLength(updatedList.length)
      setTaskListCheckedLength(
        updatedList.filter((task: ITaskProps) => task.checked).length,
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

  const addTask = (task: ITaskProps) => {
    const updatedList = [task, ...taskList]
    saveListToLocalStorage(updatedList)
  }

  const removeTask = (task: ITaskProps) => {
    const updatedList = taskList.filter((t: ITaskProps) => t.id !== task.id)
    saveListToLocalStorage(updatedList)
  }

  const toggleCheckbox = (task: ITaskProps) => {
    const updatedTask = { ...task, checked: !task.checked }
    const updatedList = taskList.map((t) =>
      t.id === task.id ? updatedTask : t,
    )

    saveListToLocalStorage(updatedList)
  }

  const handleCheckboxChange = (task: ITaskProps) => {
    toggleCheckbox(task)
  }

  useEffect(() => {
    setIsLoading(true)

    const storedList = loadListFromLocalStorage()
    setTaskList(storedList)
    setTaskListLength(storedList.length)
    setTaskListCheckedLength(
      storedList.filter((task: ITaskProps) => task.checked).length,
    )

    setIsLoading(false)
  }, [])

  const taskContextData: ITaskContextData = {
    addTask,
    isLoading,
    setIsLoading,
    taskList,
    taskListLength,
    taskListCheckedLength,
    toggleCheckbox,
    removeTask,
    handleCheckboxChange,
  }

  return (
    <TaskContext.Provider value={taskContextData}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskContextProvider }
