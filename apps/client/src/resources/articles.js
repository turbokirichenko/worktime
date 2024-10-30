import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const articlesResource = (__adapter) => ({
	resource: __adapter.table('articles'),
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