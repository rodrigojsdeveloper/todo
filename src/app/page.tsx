import TaskSummary from '@/components/task-summary'
import TaskList from '@/components/task-list'
import Header from '@/components/header'
import Form from '@/components/form'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-auto -mt-6 w-full max-w-3xl px-2.5 pb-2.5">
        <Form />
        <TaskSummary />
        <TaskList />
      </div>
    </main>
  )
}
