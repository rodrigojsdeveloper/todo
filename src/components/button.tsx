import { CirclePlus } from 'lucide-react'

export const Button = () => {
  return (
    <button
      type="submit"
      className="flex h-full w-24 items-center justify-between gap-x-2 rounded-lg border border-solid border-blue-dark bg-blue-dark p-2 font-bold duration-200 hover:border-blue hover:bg-blue disabled:opacity-40 hover:disabled:border-blue-dark hover:disabled:bg-blue-dark active:disabled:border-blue-dark active:disabled:bg-blue-dark sm:p-2.5"
    >
      Create
      <CirclePlus className="size-4" />
    </button>
  )
}
