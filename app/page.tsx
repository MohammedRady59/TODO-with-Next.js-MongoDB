import { getTodosAction } from "@/actions/todoAction";
import AddFormTodo from "@/components/AddFormTodo";
import TableTodo from "@/components/TableTodo";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  const todos = await getTodosAction({ userId });
  if (!todos) return "Loading...";
  return (
    <main className="container">
      <AddFormTodo userId={userId} />

      <TableTodo todos={todos} />
    </main>
  );
}
