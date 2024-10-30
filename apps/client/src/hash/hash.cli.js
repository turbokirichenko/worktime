import { validateHash, signHash } from './hash.js'

const arg = process.argv[2]

if (arg === 'verify') {
	const s = process.argv[3]
	const h = process.argv[4]
	const v = validateHash(s, h)
	console.log(v)
} else {
	const s = process.argv[2] ?? process.argv[3]
	const h = signHash(s)
	console.log(h)
} 
