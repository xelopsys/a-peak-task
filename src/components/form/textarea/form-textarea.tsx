import { FieldPath, FieldValues } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/form/form'
import { Textarea } from '@/components/ui/textarea/textarea'
import { cn } from '@/lib/utils'
import { TFormTextArea } from '@/types/form'

export const FormTextArea = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  label,
  className,
  placeholder,
  description,
  ...args
}: TFormTextArea<TFieldValues, TName>) => {
  const { error } = useFormField()

  return (
    <FormItem {...{ className }}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Textarea
          placeholder={placeholder}
          {...args.field}
          className={cn(error && 'border-error shadow-error')}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}
