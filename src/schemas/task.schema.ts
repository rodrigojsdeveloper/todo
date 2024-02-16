import z from 'zod'

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  checked: z.boolean(),
})
