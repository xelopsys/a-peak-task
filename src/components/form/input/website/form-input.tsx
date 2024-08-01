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

export const FormInputWebsite = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  label,
  placeholder,
  description,
  className,
  type,
  ...args
}: TFormInput<TFieldValues, TName>) => {
  const { error } = useFormField()

  return (
    <FormItem {...{ className }}>
      <FormLabel>{label}</FormLabel>
      <section className="flex flex-row place-content-center w-full h-max rounded-md shadow-xs disabled:bg-disabled disabled:border-disabled disabled:text-disabled">
        <span
          data-disabled={args.disabled}
          className={cn(
            formats.website.className,
            'text-tertiary data-[disabled=true]:bg-disabled data-[disabled=true]:border-disabled data-[disabled=true]:text-disabled'
          )}
        >
          {formats.website.left}
        </span>
        <FormControl>
          <Input
            {...args.field}
            {...{ placeholder, type }}
            className={cn(
              'rounded-r-md rounded-l-none border focus:border-brand focus:shadow-inner-focus',
              error && 'border-error shadow-error'
            )}
          />
        </FormControl>
      </section>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

const formats = {
  website: {
    left: 'https://',
    className:
      'py-2.5 pl-3.5 pr-lg rounded-l-md border border-r-0 font-normal text-md',
  },
}
