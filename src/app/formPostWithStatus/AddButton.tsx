"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-600 disabled:bg-gray-600 inline-flex rounded-lg items-center  h-20 w-20"
    >
      Add Todo
    </button>
  );
}
