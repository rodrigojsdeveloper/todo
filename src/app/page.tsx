import TaskSummary from '@/components/TaskSummary'
import TaskList from '@/components/TaskList'
import Header from '@/components/Header'
import Form from '@/components/Form'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-auto -mt-6 w-full max-w-3xl px-2">
        <Form />
        <TaskSummary />
        <TaskList />
      </div>
    </main>
  )
}
