import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const articleStatusesResource = (__adapter) => ({
	resource: __adapter.table('article_statuses'),
	options: {
		properties: {
			id: {
				isVisible: false,
			}
		},
		actions: {
			bulkDelete: {
				isVisible: false,
				isAccessible: false,
			},
			delete: {
				isVisible: false,
				isAccessible: false,
			},
		}
	}
})