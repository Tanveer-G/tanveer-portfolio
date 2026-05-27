// components/GlobalErrorBoundary.tsx
'use client'
import { Component, ReactNode } from 'react'

export class GlobalErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  handleReload = () => window.location.reload()

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <p className="mb-4">Something went wrong.</p>
            <button onClick={this.handleReload} className="px-6 py-2 bg-red-700 rounded-full">Reload page</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}