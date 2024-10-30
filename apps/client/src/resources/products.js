import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const productsResource = (__adapter) => ({
	resource: __adapter.table('products'),
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
			new: {
				isVisible: false,
				isAccessible: false,
			},
		}
	}
})