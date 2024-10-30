import Adapter from "@adminjs/sql";

/**
 * @param {Adapter} __adapter
 */
export const attachmentsResource = (__adapter) => ({
	resource: __adapter.table('attachments'),
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