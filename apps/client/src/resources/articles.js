import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const articlesResource = (__adapter) => ({
	resource: __adapter.table('articles'),
	options: {}
})