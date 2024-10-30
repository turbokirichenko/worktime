import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const warehouseResource = (__adapter) => ({
	resource: __adapter.table('warehouse'),
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
			edit: {
				isVisible: false,
				isAccessible: false,
			}
		}
	}
})