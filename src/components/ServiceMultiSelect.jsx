'use client'

import { useEffect, useRef, useState } from 'react'

export default function ServiceMultiSelect({
  id,
  options,
  value = [],
  onChange,
  placeholder = 'Select services',
  error,
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  const toggleItem = (serviceTitle) => {
    const nextValue = value.includes(serviceTitle)
      ? value.filter((item) => item !== serviceTitle)
      : [...value, serviceTitle]

    onChange(nextValue)
  }

  const selectedText = value.length ? value.join(', ') : ''

  return (
    <div className="multi-select" ref={rootRef}>
      <button
        id={id}
        type="button"
        className={`multi-select__trigger ${error ? 'is-invalid' : ''}`}
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selectedText ? 'multi-select__value' : 'multi-select__placeholder'}>
          {selectedText || placeholder}
        </span>
        <span className="multi-select__chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {open ? (
        <div className="multi-select__menu" role="listbox" aria-multiselectable="true">
          {options.map((option) => {
            const checked = value.includes(option.title)

            return (
              <button
                key={option.title}
                type="button"
                className={`multi-select__option ${checked ? 'is-selected' : ''}`}
                onClick={() => toggleItem(option.title)}
              >
                <span className="multi-select__checkbox" aria-hidden="true">
                  {checked ? '✓' : ''}
                </span>
                <span className="multi-select__option-text">{option.title}</span>
              </button>
            )
          })}
        </div>
      ) : null}

      {/* <div className="form-hint mt-2">Pick one or more services. Selected items appear together in the field.</div> */}
      {error ? <div className="form-error mt-2">{error}</div> : null}
    </div>
  )
}
