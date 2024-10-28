import Adapter from "@adminjs/sql";

/** 
 * @param {Adapter} db - адаптер
 */
export const objectsResource = (db) => ({
    resource: db.table('objects'),
    options: {
        showProperties: ['object_type', 'address', 'space', 'description'],
        listProperties: ['address', 'space', 'description'],
        actions: {
            bulkDelete: {
                isVisible: false,
            },
            delete: {
                isAccessible: false,
                isVisible: false,
            },
            edit: {
                isVisible: false,
                isAccessible: false,
            }
        }
    }
})