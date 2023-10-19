import { TaskContextProvider } from './task.context'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return <TaskContextProvider>{children}</TaskContextProvider>
}

export { Providers }
