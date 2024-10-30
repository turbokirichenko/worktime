import Adapter from "@adminjs/sql";

/** 
 * @param {Adapter} db - адаптер
 */
export const redactorsResource = (db) => ({
    resource: db.table('redactors'),
    options: {
        actions: {
            list: {
                isVisible: false,
                isAccessible: false,
            }
        }
    }
})