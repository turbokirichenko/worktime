import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const actsResource = (__adapter) => ({
	resource: __adapter.table('acts'),
	options: {}
})