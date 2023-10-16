import TaskSummary from "@/components/TaskSummary";
import Header from "@/components/Header";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-full max-w-3xl -mt-6 mx-auto px-5">
        <Form />
        <TaskSummary />
      </div>
    </main>
  );
}
