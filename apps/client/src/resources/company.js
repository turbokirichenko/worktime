import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const companyResource = (__adapter) => ({
	resource: __adapter.table('company'),
	options: {}
})