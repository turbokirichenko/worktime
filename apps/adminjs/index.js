import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { Adapter, Database, Resource } from '@adminjs/sql'
import { userResource } from './src/resources/users.js'

const PORT = 3000
AdminJS.registerAdapter({
    Database,
    Resource,
})

const start = async () => {
  const app = express()

  const db = await new Adapter('postgresql', {
    connectionString: 'postgres://app_user:password@localhost:5434/girls_db',
    database: 'girls_db',
  }).init()

  const admin = new AdminJS({
    resources: [
      userResource(db)
    ],
  });

  const adminAuthRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
    authenticate:  async (email, password) => {
        if (!email, !password) {
            return null
        }
        const tryUser = await db.table('users')
            .knex('users')
            .select('pwd')
            .where({ email: email })
            .first();
        if (password === tryUser?.pwd) {
            return { email }
        } else {
            return null
        }
    },
    cookieName: 'some-name',
    cookiePassword: 'some-password'
  })

  app.use(admin.options.rootPath, adminAuthRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()