import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const productsResource = (__adapter) => ({
	resource: __adapter.table('products'),
	options: {}
})