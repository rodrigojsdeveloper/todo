'use client'
import { ITaskProps, ITaskContextData } from '../interfaces'
import {
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
  useRef,
} from 'react'

const TaskContext = createContext({} as ITaskContextData)

const TaskContextProvider = ({ children }: PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined'
  const localStorageKey = 'ToDo: list'

  const svgRef = useRef<SVGSVGElement | null>(null)

  const [list, setList] = useState<Array<ITaskProps>>([])

  const [listLength, setListLength] = useState<number>(0)

  const [listCheckedLength, setListCheckedLength] = useState<number>(0)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const saveListToLocalStorage = (updatedList: ITaskProps[]) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList))
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
    const updatedList = [task, ...list]
    setList(updatedList)
    saveListToLocalStorage(updatedList)
  }

  const removeTask = (task: ITaskProps) => {
    const updatedList = list.filter((t: ITaskProps) => t.id !== task.id)
    setList(updatedList)
    saveListToLocalStorage(updatedList)
  }

  const toggleCheckbox = (task: ITaskProps) => {
    const updatedTask = { ...task, checked: !task.checked }
    const updatedList = list.map((item) =>
      item.id === task.id ? updatedTask : item,
    )

    setList(updatedList)
    saveListToLocalStorage(updatedList)
  }

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

  const handleCheckboxChange = (task: ITaskProps) => {
    toggleCheckbox(task)
  }

  useEffect(() => {
    setIsLoading(true)

    const storedList = loadListFromLocalStorage()
    setList(storedList)
    setListLength(storedList.length)
    setListCheckedLength(
      storedList.filter((task: ITaskProps) => task.checked).length,
    )

    setIsLoading(false)
  }, [])

  const taskContextData: ITaskContextData = {
    addTask,
    isLoading,
    setIsLoading,
    list,
    listLength,
    listCheckedLength,
    toggleCheckbox,
    removeTask,
    handleSvgHover,
    handleSvgHoverEnd,
    handleCheckboxChange,
    svgRef,
  }

  return (
    <TaskContext.Provider value={taskContextData}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskContextProvider }
