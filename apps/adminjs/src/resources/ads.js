import Adapter from "@adminjs/sql";
import { ValidationError } from "adminjs";

/** 
 * @param {Adapter} db - адаптер
 */
export const adsResource = (db) => ({
    resource: db.table('ads'),
    options: {
        showProperties: ['ad_type', 'object_type', 'address', 'space', 'floor', 'rooms', 'cost', 'created_date', 'user_id', 'object_id'],
        listProperties: ['address', 'user_id', 'cost', 'created_date', 'space'],
        actions: {
            AddToFavourite: {
                actionType: 'record',
                component: false,
                handler: async (req, res, ctx) => {
                    const { record, currentAdmin } = ctx;
                    const isExist = await db.table('favourites')
                        .knex('favourites')
                        .select('id', 'ads_id')
                        .where({ads_id: record?.params?.id, users_id: currentAdmin.id})
                        .first();
                    if (isExist) {
                        throw new ValidationError({ recordId: 'уже добавлен в избранное!'});
                    }
                    const insertObject = {
                        users_id: currentAdmin.id,
                        ads_id: record?.params?.id,
                        cathegory: record?.params?.ad_type,
                        created_at: new Date(),
                        description: `${currentAdmin.email} добавил в избранное новое объявление!`
                    }
                    const result = await db.table('favourites')
                        .knex('favourites')
                        .insert(insertObject);
                    console.log(result);
                    return {
                        record: record.toJSON(currentAdmin),
                        msg: 'Добавлено в Избранное!'
                    };
                }
            },
            bulkDelete: {
                isVisible: false,
            },
            delete: {
                isAccessible: false,
                isVisible: false,
            },
            edit: {
                isVisible: false,
            }
        }
    }
})