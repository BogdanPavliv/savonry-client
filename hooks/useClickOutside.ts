import { useEffect, useRef, useState } from 'react'

export const useClickOutside = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref])

  return { open, setOpen, toggle, ref }
}
