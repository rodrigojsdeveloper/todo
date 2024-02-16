import { PropsWithChildren } from 'react'
import { TaskContextProvider } from './task.context'

const Providers = ({ children }: PropsWithChildren) => {
  return <TaskContextProvider>{children}</TaskContextProvider>
}

export default Providers
