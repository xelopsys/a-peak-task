import { ComponentProps, ReactNode } from 'react'
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form'

import { FormField } from '@/components/form/form'

export type TOption = Record<'value' | 'label', string>
export type TFormField = typeof FormField
export type TFormFormItemProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  label: string | ReactNode
  placeholder: string
  description?: string
  disabled?: boolean
  field: ControllerRenderProps<TFieldValues, TName>
}

export type TFormSearch<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TFormFormItemProps<TFieldValues, TName> & {
  options: TOption[]
  className?: string
}

export type TFormInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TFormFormItemProps<TFieldValues, TName> & ComponentProps<'input'>

export type TFormSelect<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TFormFormItemProps<TFieldValues, TName> & {
  options: TOption[]
  className?: string
}

export type TFormTextArea<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TFormFormItemProps<TFieldValues, TName> & ComponentProps<'textarea'>
