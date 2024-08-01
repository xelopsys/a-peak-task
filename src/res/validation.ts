import z from 'zod'

export const validationScheama = z.object({
  title: z.string(),
  title2: z.string(),
  description: z.string(),
  website: z.string(),
  company: z.object({
    value: z.string(),
    label: z.string(),
  }),
  location: z.object({
    value: z.string(),
    label: z.string(),
  }),
  employment: z.string(),
})

export type TValidationSchema = z.infer<typeof validationScheama>
