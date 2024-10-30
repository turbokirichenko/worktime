import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const attachmentsResource = (__adapter) => ({
	resource: __adapter.table('attachments'),
	options: {}
})