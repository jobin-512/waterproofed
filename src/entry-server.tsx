// src/entry-server.tsx
import { renderToString } from 'react-dom/server'
import { RouterProvider } from '@tanstack/react-router'
import { createMemoryHistory } from '@tanstack/react-router'
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export async function render(url: string) {
  const history = createMemoryHistory({
    initialEntries: [url],
  })

  const router = createTanStackRouter({
    routeTree,
    history,
  })

  await router.load()

  const html = renderToString(<RouterProvider router={router} />)

  return { appHtml: html }
}