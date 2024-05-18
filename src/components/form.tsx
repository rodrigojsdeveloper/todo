'use client'

import { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { TaskContext } from '@/contexts/task.context'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema } from '@/schemas/task.schema'
import { Button } from './button'
import { Input } from './input'
import * as zod from 'zod'

type FormData = zod.infer<typeof taskSchema>

export const Form = () => {
  const { handleAddTask } = useContext(TaskContext)

  const schema = zod.object({
    title: zod.string().min(1),
  })

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmitFunction = handleSubmit((data: FieldValues) => {
    const taskData: FormData = {
      id: crypto.randomUUID(),
      title: data.title,
      checked: false,
    }
    handleAddTask(taskData)
    reset()
  })

  return (
    <form
      onSubmit={onSubmitFunction}
      className="flex h-[3.125rem] justify-center gap-x-2 sm:h-[3.375rem]"
    >
      <Input register={register} />
      <Button />
    </form>
  )
}
