import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const articleStatusesResource = (__adapter) => ({
	resource: __adapter.table('article_statuses'),
	options: {}
})