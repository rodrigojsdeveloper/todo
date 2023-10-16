import TaskSummary from "@/components/TaskSummary";
import Header from "@/components/Header";
import Form from "@/components/Form";
import List from "@/components/List";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-full max-w-3xl -mt-6 mx-auto px-2">
        <Form />
        <TaskSummary />
        <List />
      </div>
    </main>
  );
}
