import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { Adapter, Database, Resource } from '@adminjs/sql'
import { 
  adsResource,
  favouritesResource,
  objectsResource,
  redactorsResource,
  usersResource 
} from './src/resources/index.js'

const PORT = 3000
AdminJS.registerAdapter({
    Database,
    Resource,
})

const start = async () => {
  const app = express()
  app.use('/public', express.static('./public'));

  const db = await new Adapter('postgresql', {
    connectionString: 'postgres://app_user:password@localhost:5434/girls_db',
    database: 'girls_db',
  }).init()

  const admin = new AdminJS({
    resources: [
      usersResource(db),
      favouritesResource(db),
      objectsResource(db),
      redactorsResource(db),
      adsResource(db),
    ],
    branding: {
      companyName: 'Аренда квартир и помещений',
      softwareBrothers: false,
      logo: 'http://localhost:3000/public/cat.jpg',
      favicon: 'http://localhost:3000/public/cat-cute.gif',
    },
    locale: {
        translations: {
            messages: {
                loginWelcome: 'Добро Пожаловать!' // the smaller text
            },
            labels: {
                loginWelcome: 'Аренда квартир', // this could be your project name
            },
        }
    },
  });

  const adminAuthRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
    authenticate:  async (email, password) => {
        if (!email, !password) {
            return null
        }
        const tryUser = await db.table('users')
            .knex('users')
            .select('id', 'pwd')
            .where({ email: email })
            .first();
        if (password === tryUser?.pwd) {
            return { id: tryUser?.id ?? null, email }
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