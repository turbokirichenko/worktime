import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const vendorsResource = (__adapter) => ({
	resource: __adapter.table('vendors'),
	options: {}
})