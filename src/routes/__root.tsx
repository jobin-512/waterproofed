import { createRootRoute, Outlet, HeadContent } from '@tanstack/react-router'
import { lazy, Suspense, type ComponentType } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from '../components/header'
import Footer from '../components/footer'

const TanStackRouterDevtoolsLazy: ComponentType | null = import.meta.env.DEV
  ? lazy(() => import('@tanstack/react-router-devtools').then(m => ({ default: m.TanStackRouterDevtools })))
  : null

export const Route = createRootRoute({
  component: () => (
    <>
    <head>
      <HeadContent />
    </head>
      <Header />
      <Outlet />
      <Analytics />
      {TanStackRouterDevtoolsLazy ? (
        <Suspense fallback={null}>
          <TanStackRouterDevtoolsLazy />
        </Suspense>
      ) : null}
      <Footer/>
    </>
  ),
})