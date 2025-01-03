import React, { Suspense } from 'react'

const TanStackRouterDevtoolsImport =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    )



export const TanStackRouterDevtools = () => <Suspense>
  <TanStackRouterDevtoolsImport/>
</Suspense>