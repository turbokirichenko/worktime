import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const positionsResource = (__adapter) => ({
	resource: __adapter.table('positions'),
	options: {}
})