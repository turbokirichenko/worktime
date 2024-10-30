import { Adapter } from '@adminjs/sql'
import { validateHash } from '../hash/hash.js'

const COOKIE_NAME = process.env.COOKIE_NAME
const COOKIE_PHRASE = process.env.COOKIE_PHRASE

/**
 * 
 * @param {Adapter} __adapter 
 */
export const adminAuthFactory = (__adapter) => {
	const knex = __adapter.table('employees').knex
    return {
        authenticate: async (email, password) => {
            if (!email || !password) {
              return null
            }
            const tryUser = await knex('employees')
              .select('id', 'password')
              .where({ email: email })
              .first();
            if (!tryUser) {
                return null
            }
			const v = validateHash(password, tryUser.password)
            if (v) {
              return { id: tryUser.id, email }
            } else {
              return null
            }
        },
        cookieName: COOKIE_NAME,
        cookiePassword: COOKIE_PHRASE
    }
}