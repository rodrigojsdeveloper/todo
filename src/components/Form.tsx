'use client'
import { FieldValues, useForm } from 'react-hook-form'
import { TaskContext } from '@/contexts/task.context'
import { zodResolver } from '@hookform/resolvers/zod'
import taskSchema from '@/schemas/task.schema'
import { useContext } from 'react'
import Button from './button'
import Input from './input'
import * as zod from 'zod'

type FormData = zod.infer<typeof taskSchema>

const Form = () => {
  const { addTask } = useContext(TaskContext)

  const schema = zod.object({
    title: zod.string().min(1),
  })

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmitFunction = (data: FieldValues) => {
    const taskData: FormData = {
      id: crypto.randomUUID(),
      title: data.title,
      checked: false,
    }
    addTask(taskData)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex h-54 justify-center gap-x-2 max-sm:h-50"
    >
      <Input register={register} />
      <Button />
    </form>
  )
}

export default Form
