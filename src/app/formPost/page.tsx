import { revalidatePath } from "next/cache";

const todos: string[] = ["Learn React"];
export default function Home() {
  async function addTodo(data: FormData) {
    "use server";
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/");
  }
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul className="">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="border border-gray-300 rounded-lg py-4 px-4 text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 disabled:bg-gray-600 inline-flex rounded-lg items-center  h-20 w-20"
        >
          Add todo
        </button>
      </form>
    </main>
  );
}
