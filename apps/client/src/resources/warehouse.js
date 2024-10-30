import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const warehouseResource = (__adapter) => ({
	resource: __adapter.table('warehouse'),
	options: {}
})