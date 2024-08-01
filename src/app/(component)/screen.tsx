'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  IconFlag05,
  IconHeaderPattern,
  IconHelpCircle,
  IconSave01,
  IconXClose,
} from '@/assets/icons'
import { Form, FormField } from '@/components/form/form'
import { FormInput } from '@/components/form/input/form-input'
import { FormInputWebsite } from '@/components/form/input/website/form-input'
import { FormSearch } from '@/components/form/search/form-search'
import { FormSelect } from '@/components/form/select/form-select'
import { FormTextArea } from '@/components/form/textarea/form-textarea'
import { Button } from '@/components/ui/button/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/card'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/dialog'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card/hover-card'
import { Typography } from '@/components/ui/typography/typography'
import { cn } from '@/lib/utils'
import { companies } from '@/res/data'
import { inputs } from '@/res/inputs'
import { TValidationSchema, validationScheama } from '@/res/validation'
export default function Component() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [width, setWidth] = useState(0)

  const form = useForm<TValidationSchema>({
    resolver: zodResolver(validationScheama),
    shouldFocusError: true,
    mode: 'all',
  })

  useEffect(() => {
    if (!window) return
    setWidth(window.innerWidth)
    const down = (e: KeyboardEvent) => {
      if (e.key === 'm' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    return () => {
      document.removeEventListener('keydown', down)
      window.addEventListener('resize', () => {})
    }
  }, [])

  const firststep = cn(
    'data-[step=2]:hidden data-[step=1]:animate-in data-[step=2]:animate-out data-[step=2]:fade-out-0 data-[step=1]:fade-in-0 sm:!grid col-span-2 sm:animate-none sm:fade-none'
  )
  const secondstep = cn(
    'data-[step=1]:hidden data-[step=2]:animate-in data-[step=1]:animate-out data-[step=1]:fade-out-0 data-[step=2]:fade-in-0 sm:!grid col-span-2 sm:animate-none sm:fade-none'
  )

  const buttontext = step === 1 && width < 640 ? 'Next' : 'Add experience'

  const onSubmit = (data: TValidationSchema) => {
    toast('Event is submitted', {
      description: (
        <pre className="rounded-md bg-secondary p-4 w-full">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main className="flex grow flex-col justify-between p-3 sm:p-24 border">
      <div className=" grow grid place-content-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <Card className="max-w-modal">
            <CardHeader>
              <CardTitle>Modal Design</CardTitle>
              <CardDescription>
                Some really cool description here
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col justify-between text-center">
              <Typography variant="sm" className="text-secondary">
                Press cmd | ctrl + m to open the modal
              </Typography>
              <DialogTrigger asChild>
                <Button variant="primary" className="w-full">
                  Open modal
                </Button>
              </DialogTrigger>
            </CardFooter>
          </Card>
          <DialogContent data-closebutton>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader className="relative">
                  <div className="">
                    <span className="p-3 border border-subtle w-max rounded-lg border-gray-shadow mb-3 hidden sm:flex">
                      <IconFlag05 />
                    </span>
                  </div>
                  <DialogClose className="absolute top-22 right-22 sm:top-26 sm:right-26">
                    <IconXClose />
                  </DialogClose>
                  <span className="absolute top-0 left-0 -z-10 hidden sm:flex">
                    <IconHeaderPattern />
                  </span>
                  <DialogTitle>
                    <Typography variant="lg">Add experience</Typography>
                  </DialogTitle>
                  <DialogDescription>
                    <Typography variant="sm">
                      Share where you’ve worked on your profile.
                    </Typography>
                  </DialogDescription>
                </DialogHeader>
                <DialogBody className="grow max-h-488">
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      data-step={step}
                      className={cn('col-span-2', firststep)}
                    >
                      <FormField
                        control={form.control}
                        name={inputs.title.name}
                        render={({ field }) => (
                          <FormInput
                            label={inputs.title.label}
                            placeholder={inputs.title.placeholder}
                            field={field}
                          />
                        )}
                      />
                    </div>
                    <div
                      data-step={step}
                      className={cn(
                        'col-span-2 grid sm:grid-cols-2 gap-4',
                        firststep
                      )}
                    >
                      <FormField
                        control={form.control}
                        name={inputs.company.name}
                        render={({ field }) => (
                          <FormSearch
                            field={field}
                            label={inputs.company.label}
                            placeholder={inputs.company.placeholder}
                            options={companies}
                          />
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={inputs.website.name}
                        render={({ field }) => (
                          <FormInputWebsite
                            label={inputs.website.label}
                            placeholder={inputs.website.placeholder}
                            field={field}
                          />
                        )}
                      />
                    </div>
                    <div
                      data-step={step}
                      className={cn('sm:col-span-1', firststep)}
                    >
                      <FormField
                        control={form.control}
                        name={inputs.location.name}
                        render={({ field }) => (
                          <FormSearch
                            field={field}
                            label={inputs.location.label}
                            placeholder={inputs.location.placeholder}
                            options={companies}
                          />
                        )}
                      />
                    </div>
                    <div
                      data-step={step}
                      className={cn('sm:w-32 sm:col-span-1', secondstep)}
                    >
                      <FormField
                        control={form.control}
                        name={inputs.employment.name}
                        render={({ field }) => (
                          <FormSelect
                            label={inputs.employment.label}
                            placeholder={inputs.employment.placeholder}
                            options={companies}
                            field={field}
                          />
                        )}
                      />
                    </div>
                    <div
                      data-step={step}
                      className={cn('col-span-2', secondstep)}
                    >
                      <FormField
                        control={form.control}
                        name={inputs.title2.name}
                        render={({ field }) => (
                          <FormInput
                            label={inputs.title2.label}
                            placeholder={inputs.title2.placeholder}
                            field={field}
                          />
                        )}
                      />
                    </div>
                    <div
                      data-step={step}
                      className={cn('col-span-2', secondstep)}
                    >
                      <FormField
                        control={form.control}
                        name={inputs.description.name}
                        render={({ field }) => (
                          <FormTextArea
                            field={field}
                            label={
                              <span className="flex place-items-center gap-0.5">
                                <Typography variant="sm">
                                  {inputs.description.label}
                                </Typography>
                                <HoverCard>
                                  <HoverCardTrigger>
                                    <IconHelpCircle />
                                  </HoverCardTrigger>
                                  <HoverCardContent
                                    align="end"
                                    side="right"
                                    className="w-80"
                                  >
                                    <Typography variant="sm">
                                      Description for your modal
                                    </Typography>
                                  </HoverCardContent>
                                </HoverCard>
                              </span>
                            }
                            placeholder={inputs.description.placeholder}
                          />
                        )}
                      />
                    </div>
                    <div className="flex place-content-center col-span-2 gap-4 sm:hidden pt-1">
                      <button
                        type="button"
                        data-active={step === 1}
                        onClick={() => setStep(1)}
                        className="w-2.5 h-2.5 rounded-full bg-quaternary data-[active=true]:bg-brand"
                      />
                      <button
                        type="button"
                        data-active={step === 2}
                        onClick={() => setStep(2)}
                        className="w-2.5 h-2.5 rounded-full bg-quaternary data-[active=true]:bg-brand"
                      />
                    </div>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="grow text-center space-x-0.5"
                  >
                    <IconSave01 className="stroke-inherit stroke-2" />
                    <Typography variant="md" className="font-semibold">
                      Save as draft
                    </Typography>
                  </Button>
                  <Button className="grow" type="submit">
                    <Typography variant="md" className="font-semibold">
                      {buttontext}
                    </Typography>
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
