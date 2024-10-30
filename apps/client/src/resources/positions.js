import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const positionsResource = (__adapter) => ({
	resource: __adapter.table('positions'),
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