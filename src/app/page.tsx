import TaskSummary from '@/components/TaskSummary'
import Header from '@/components/Header'
import Form from '@/components/Form'
import List from '@/components/List'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-auto -mt-6 w-full max-w-3xl px-2">
        <Form />
        <TaskSummary />
        <List />
      </div>
    </main>
  )
}
