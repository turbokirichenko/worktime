import Adapter from "@adminjs/sql";

/** 
 * @param {Adapter} db - адаптер
 */
export const favouritesResource = (db) => ({
    resource: db.table('favourites'),
    options: {
        listProperties: ['ads_id', 'cathegory', 'description', 'created_at'],
        filterProperties: ['ads_id', 'cathegory'],
        showProperties: ['ads_id', 'cathegory', 'description', 'created_at'],
        actions: {
            bulkDelete: {
                isVisible: false,
            },
            edit: {
                isVisible: false,
            },
            list: {
                showFilter: false,
                after: async (response, request, ctx) => {
                    const { currentAdmin } = ctx;
                    response.records = response.records.filter((record) => {
                        if (record.params.users_id === currentAdmin.id) {
                            return true;
                        };
                        return false;
                    });
                    response.meta.total = String(response.records?.length ?? 0);
                    return response;
                },
            },
            new: {
                isVisible: false,
            }
        }
    }
})