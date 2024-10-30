import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
//import { dark, light, noSidebar } from '@adminjs/themes'
import { Adapter, Database, Resource } from '@adminjs/sql'
import { adminResourceFactory } from './config/admin.resources.js'
import { branding } from './config/admin.branding.js'
import { locale } from './config/admin.locale.js'
import { adminAuthFactory } from './config/admin.auth.js'
import { Components, componentLoader } from './components/component-loader.js'
import * as url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const PORT = process.env.DEFAULT_PORT
const PGRST_DB_URL = process.env.PGRST_DB_URI
const PGRST_DB = process.env.PGRST_DB
console.log(PGRST_DB_URL)
console.log(PGRST_DB)

AdminJS.registerAdapter({
  Database,
  Resource,
})

export const bootstrap = async () => {
  const app = express()
  app.use(express.static(path.join(__dirname, "../public")));

  const db = await new Adapter('postgresql', {
    connectionString: PGRST_DB_URL,
    database: PGRST_DB,
  }).init()

  const admin = new AdminJS({
    //defaultTheme: dark.id,
    //availableThemes: [dark, light, noSidebar],
    dashboard: {
      component: Components.Dashboard
    },
    componentLoader,
      resources: adminResourceFactory(db),
      branding,
      locale,
    assets: {
      styles: ['/login-page.css']
    }
  })

  const adminAuthRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin, 
    adminAuthFactory(db)
  )
  app.use(admin.options.rootPath, adminAuthRouter)
  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}