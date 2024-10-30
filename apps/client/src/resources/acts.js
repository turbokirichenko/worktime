import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const actsResource = (__adapter) => ({
	resource: __adapter.table('acts'),
	options: {
		editProperties: ['name', 'vendor_id', 'created_at'],
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