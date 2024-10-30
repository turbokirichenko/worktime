import crypto from 'node:crypto';

/** hash algorithm */ 
const HASH_ALG = process.env.HASH_ALG ?? "sha1";

/** hash secret */
const PADDING = process.env.HASH_PAD ?? "";

/**
 * 
 * @param {Buffer} salt 
 * @param {string} str 
 * @returns {Buffer}
 */
const createHash = (salt, str) => {
    const buff = Buffer.from(str, 'utf8')
    const hmac = crypto.createHmac(HASH_ALG, PADDING)
	const leng = salt.length + buff.length
    hmac.update(Buffer.concat([salt, buff], leng))
    return hmac.digest()
}

/**
 * @param {string} str 
 * @returns {string}
 */
export const signHash = (str) => {
    const salt = crypto.randomBytes(16)
    const hash = createHash(salt, str)
    return `${salt.toString('base64')}.${hash.toString('base64')}`
}

/** 
 * @param {string} str 
 * @param {string} hashStr 
 * @returns {boolean}
 */
export const validateHash = (str, hashStr) => {
    const [salt, hash] = hashStr.split('.')
    const test = createHash(Buffer.from(salt, 'base64'), str)
	const buff = Buffer.from(hash, 'base64')
    return Buffer.compare(test, buff) === 0
}
