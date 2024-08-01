import { FieldPath, FieldValues } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/form/form'
import { Input } from '@/components/form/input'
import { cn } from '@/lib/utils'
import { TFormInput } from '@/types/form'

export const FormInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  className,
  placeholder,
  description,
  label,
  type,
  ...args
}: TFormInput<TFieldValues, TName>) => {
  const { error } = useFormField()
  return (
    <FormItem {...{ className }}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          {...args.field}
          {...{ placeholder, type }}
          className={cn(
            'border focus:border-brand focus:shadow-inner-focus',
            error && 'border-error shadow-error'
          )}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}
