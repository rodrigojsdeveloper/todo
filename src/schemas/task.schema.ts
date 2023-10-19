import z from 'zod'

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  checked: z.boolean(),
})

export { taskSchema }
