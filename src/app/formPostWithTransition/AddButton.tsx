"use client";

import { useRef, useTransition } from "react";

export default function AddButton({
  addTodo,
}: {
  addTodo: (todo: string) => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();
  const todoRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        ref={todoRef}
        type="text"
        name="todo"
        className="border border-gray-300 rounded-lg py-4 px-4 text-black"
      />
      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async () => {
            await addTodo(todoRef.current?.value ?? "");
          });
        }}
        type="submit"
      >
        Add Todo
      </button>
    </div>
  );
}
