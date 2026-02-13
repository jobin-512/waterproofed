// api/ssr.js - DEBUG VERSION
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function handler(req, res) {
  console.log('=== REQUEST START ===')
  console.log('URL:', req.url)
  console.log('Method:', req.method)
  
  const url = req.url || '/'
  
  // Handle sitemap.xml
  if (url === '/sitemap.xml' || url.startsWith('/sitemap.xml')) {
    console.log('Sitemap request detected')
    try {
      const sitemapPath = path.join(process.cwd(), 'dist/client/sitemap.xml')
      console.log('Sitemap path:', sitemapPath)
      console.log('File exists?', fs.existsSync(sitemapPath))
      
      if (!fs.existsSync(sitemapPath)) {
        console.log('Sitemap file not found!')
        console.log('Working directory:', process.cwd())
        console.log('Directory contents:', fs.readdirSync(path.join(process.cwd(), 'dist/client')))
        return res.status(404).send('Sitemap not found at: ' + sitemapPath)
      }
      
      const sitemap = fs.readFileSync(sitemapPath, 'utf-8')
      console.log('Sitemap content length:', sitemap.length)
      console.log('First 100 chars:', sitemap.substring(0, 100))
      
      res.setHeader('Content-Type', 'application/xml; charset=utf-8')
      res.setHeader('Content-Length', Buffer.byteLength(sitemap, 'utf-8'))
      res.status(200).send(sitemap)
      console.log('Sitemap sent successfully')
      return
    } catch (error) {
      console.error('Sitemap error:', error)
      return res.status(500).send('Error loading sitemap: ' + error.message)
    }
  }
  
  // Handle robots.txt
  if (url === '/robots.txt' || url.startsWith('/robots.txt')) {
    console.log('Robots.txt request detected')
    try {
      const robotsPath = path.join(process.cwd(), 'dist/client/robots.txt')
      console.log('Robots path:', robotsPath)
      console.log('File exists?', fs.existsSync(robotsPath))
      
      if (!fs.existsSync(robotsPath)) {
        return res.status(404).send('Robots.txt not found')
      }
      
      const robots = fs.readFileSync(robotsPath, 'utf-8')
      console.log('Robots content:', robots)
      
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.status(200).send(robots)
      console.log('Robots.txt sent successfully')
      return
    } catch (error) {
      console.error('Robots.txt error:', error)
      return res.status(500).send('Error loading robots.txt: ' + error.message)
    }
  }
  
  // Regular SSR
  console.log('Regular SSR request')
  try {
    const templatePath = path.join(process.cwd(), 'dist/client/index.html')
    const template = fs.readFileSync(templatePath, 'utf-8')
    
    const serverPath = path.join(process.cwd(), 'dist/server/entry-server.js')
    const { render } = await import(serverPath)
    const { appHtml } = await render(url)
    
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(200).send(html)
    console.log('SSR sent successfully')
  } catch (error) {
    console.error('SSR Error:', error)
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Error</title></head>
        <body>
          <h1>SSR Error</h1>
          <pre>${error.message}</pre>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `)
  }
}