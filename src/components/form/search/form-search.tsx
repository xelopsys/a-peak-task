'use client'

import { useCallback, useRef, useState } from 'react'
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form'

import { IconCheck, IconSearchLg } from '@/assets/icons'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/form/form'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover/popover'
import { Typography } from '@/components/ui/typography/typography'
import { TFormSearch, TOption } from '@/types/form'

export function FormSearch<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  label,
  options,
  placeholder,
  className,
  ...args
}: TFormSearch<TFieldValues, TName>) {
  const { error } = useFormField()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState<TOption | null>(null)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected(null)
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    []
  )

  const handleSelect = useCallback(
    ({
      field,
      item,
    }: {
      field: ControllerRenderProps<TFieldValues, TName>
      item: TOption
    }) => {
      setInputValue('')
      setSelected(item)
      field.onChange(item)
      setOpen(false)
    },
    []
  )

  const handleBlur = () => {
    setOpen(false)
  }
  const handleFocus = () => {
    setOpen(true)
  }

  return (
    <FormItem {...{ className }}>
      <FormLabel>{label}</FormLabel>
      <Command onKeyDown={handleKeyDown}>
        <Popover open={open} modal>
          <PopoverTrigger className="w-full">
            <FormControl>
              <CommandInput
                {...args}
                ref={inputRef}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onValueChange={setInputValue}
                placeholder={placeholder}
                data-error={!!error}
              >
                <IconSearchLg width={20} />
                {selected?.value && (
                  <Typography variant="md" className="whitespace-nowrap">
                    {selected.label}
                  </Typography>
                )}
              </CommandInput>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent
            className="popover-full"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <CommandEmpty>
              No items found for <strong>{inputValue}</strong>
            </CommandEmpty>
            <CommandList data-popover>
              <CommandGroup>
                {options.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.label}
                    onSelect={() => {
                      handleSelect({ ...args, item })
                    }}
                    data-selected={item.value === selected?.value}
                  >
                    {item.label}
                    {item.value === selected?.value && (
                      <span className="ml-auto">
                        <IconCheck
                          width={20}
                          stroke-width={2}
                          className="stroke-brand"
                        />
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </PopoverContent>
        </Popover>
      </Command>
      <FormMessage />
    </FormItem>
  )
}
