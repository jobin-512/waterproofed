// api/ssr.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function handler(req, res) {
  console.log('SSR Function called:', req.url)
  
  try {
    const url = req.url || '/'
    
    // Load template
    const templatePath = path.join(process.cwd(), 'dist/client/index.html')
    
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found at: ${templatePath}`)
    }
    
    const template = fs.readFileSync(templatePath, 'utf-8')

    // Load SSR module
    const serverPath = path.join(process.cwd(), 'dist/server/entry-server.js')
    
    if (!fs.existsSync(serverPath)) {
      throw new Error(`Server bundle not found at: ${serverPath}`)
    }

    const { render } = await import(serverPath)
    
    if (!render) {
      throw new Error('render function not found')
    }
    
    const { appHtml } = await render(url)

    if (!appHtml) {
      throw new Error('render() returned no appHtml')
    }

    // Insert HTML
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    res.status(200).send(html)
    
  } catch (error) {
    console.error('SSR Error:', error)
    
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head><title>SSR Error</title></head>
        <body>
          <h1>Server Error</h1>
          <pre>${error.message}</pre>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `)
  }
}