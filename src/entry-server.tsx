import { renderToString } from 'react-dom/server'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'



  export async function render(url: string) {
  const router = createRouter(url)

  // Load the router
  await router.load()

  // Render to string (NOT stream)
  const appHtml = renderToString(<RouterProvider router={router} />)

  return { appHtml }
}   