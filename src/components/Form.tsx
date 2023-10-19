'use client'
import { TaskContext } from '@/contexts/task.context'
import { FieldValues, useForm } from 'react-hook-form'
import { ITaskProps } from '@/interfaces'
import { useContext } from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  const { addTask } = useContext(TaskContext)

  const { register, handleSubmit, reset } = useForm()

  const onSubmitFunction = (data: FieldValues) => {
    const taskData: ITaskProps = {
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
