import ClientWrapper from '@/components/client/ClientWrapper'
import { GlobalErrorBoundary } from '@/components/GlobalErrorBoundary'

export default function Page() {
  return (
    <GlobalErrorBoundary>
      <ClientWrapper />
    </GlobalErrorBoundary>
    )
}