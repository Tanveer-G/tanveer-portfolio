'use client'

import { useEffect, useRef } from 'react'

export interface ToastState {
  title: string
  message: string
  type: 'ok' | 'err'
  visible: boolean
}

interface ToastProps {
  state: ToastState
}

export default function Toast({ state }: ToastProps) {
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (!ref.current) return
    if (state.visible) {
      ref.current.classList.add('show')
      clearTimeout(timerRef?.current)
      timerRef.current = setTimeout(() => {
        ref.current?.classList.remove('show')
      }, 5000)
    }
    return () => clearTimeout(timerRef?.current)
  }, [state])

  const isErr = state.type === 'err'

  return (
    <div id="toast" ref={ref}>
      <div className="glass-d rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl">
        <div
          className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
          style={{
            background: isErr
              ? 'linear-gradient(130deg,#C72C41,#801336)'
              : 'linear-gradient(130deg,#EE4540,#C72C41)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d={isErr ? 'M2 2l12 12M14 2 2 14' : 'M3 8l3 3 7-7'}
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sm text-white">{state.title}</p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(237,224,240,.52)' }}>
            {state.message}
          </p>
        </div>
      </div>
    </div>
  )
}
