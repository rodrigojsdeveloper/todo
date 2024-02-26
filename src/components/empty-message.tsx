import { ClipboardList } from 'lucide-react'

export const EmptyMessage = () => {
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center gap-y-4">
      <ClipboardList className="size-14 text-[#414040]" strokeWidth={1.5} />

      <div className="flex flex-col items-center text-center text-gray-300">
        <p className="text-base font-bold">
          You don{"'"}t have tasks registered yet
        </p>
        <p className="text-sm font-normal">
          Create tasks and organize your to-do items
        </p>
      </div>
    </div>
  )
}
