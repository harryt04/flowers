'use client'

import * as React from 'react'
import * as Primitive from '@ui-sdk/react/select'

import { cn } from '@/lib/utils'
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from 'lucide-react'

const Select = Primitive.Select

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.SelectGroup>) {
  return (
    <Primitive.SelectGroup
      className={cn('scroll-my-1 p-1', className)}
      {...props}
    />
  )
}

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.SelectValue>) {
  return (
    <Primitive.SelectValue
      className={cn('flex flex-1 text-left', className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: Omit<React.ComponentProps<typeof Primitive.SelectTrigger>, 'children'> & {
  children?: React.ReactNode
  size?: 'sm' | 'default'
}) {
  return (
    <Primitive.SelectTrigger
      data-size={size}
      className={cn(
        "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex w-fit items-center justify-between gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4" />
    </Primitive.SelectTrigger>
  )
}

function SelectContent({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: React.ComponentProps<typeof Primitive.SelectContent>) {
  return (
    <Primitive.SelectContent
      container={typeof document === 'undefined' ? null : document.body}
      side={side}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      data-align-trigger={alignItemWithTrigger}
      className={cn(
        'bg-popover text-popover-foreground ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg shadow-md ring-1 duration-100 data-[align-trigger=true]:animate-none',
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.SelectContent>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.SelectGroupLabel>) {
  return (
    <Primitive.SelectGroupLabel
      className={cn('text-muted-foreground px-1.5 py-1 text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Primitive.SelectItem>, 'children'> & {
  children?: React.ReactNode
}) {
  return (
    <Primitive.SelectItem
      className={cn(
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <Primitive.SelectItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </Primitive.SelectItemText>
      <Primitive.SelectItemIndicator className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
        <CheckIcon className="pointer-events-none" />
      </Primitive.SelectItemIndicator>
    </Primitive.SelectItem>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.SelectSeparator>) {
  return (
    <Primitive.SelectSeparator
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

type ScrollButtonProps = React.ComponentProps<'button'>

function ScrollButton({
  direction,
  onClick,
  className,
  ...props
}: ScrollButtonProps & { direction: 'up' | 'down' }) {
  const Icon = direction === 'up' ? ChevronUpIcon : ChevronDownIcon
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label={`Scroll ${direction}`}
      className={cn(
        'bg-popover sticky z-10 flex w-full justify-center py-1',
        direction === 'up' ? 'top-0' : 'bottom-0',
        className,
      )}
      onMouseDown={(event) => event.preventDefault()}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented)
          event.currentTarget
            .closest('[data-slot="select-content"]')
            ?.scrollBy({ top: direction === 'up' ? -48 : 48 })
      }}
      {...props}
    >
      <Icon className="size-4" />
    </button>
  )
}

function SelectScrollUpButton(props: ScrollButtonProps) {
  return <ScrollButton direction="up" {...props} />
}

function SelectScrollDownButton(props: ScrollButtonProps) {
  return <ScrollButton direction="down" {...props} />
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
