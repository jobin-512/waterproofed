import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isProd = process.env.NODE_ENV === 'production'

async function createServer() {
  const app = express()

  let vite: any

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')))
  }

  app.use('*', async (req, res) => {
  const url = req.originalUrl

  try {
    let template: string
    let render: any

    if (!isProd) {
      // DEV
      template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(url, template)

      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      // PROD
      template = fs.readFileSync(
        path.resolve(__dirname, 'dist/client/index.html'),
        'utf-8'
      )

      render = (await import('./dist/server/entry-server.js')).render
    }

    const { appHtml } = await render(url)
    const html = template.replace(
        /<div id="root">.*?<\/div>/s,
        `<div id="root">${appHtml}</div>`
      )

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    if (!isProd) vite.ssrFixStacktrace(e as Error)
    console.error(e)
    res.status(500).end('Server Error')
  }
})

  app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`)
  })
}

createServer()
