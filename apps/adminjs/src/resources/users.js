import Adapter from "@adminjs/sql";

/** 
 * @param {Adapter} db - адаптер
 */
export const userResource = (db) => ({
    resource: db.table('users'),
    options: {
        listProperties: ['name', 'email', 'phone'],
        filterProperties: [],
        editProperties: ['name', 'email', 'phone', 'pwd'],
        showProperties: ['name', 'email', 'phone'],
        actions: {
            new: {
              before: async (request) => {
                if (request.payload?.pwd) {
                  request.payload.pwd = request.payload.pwd;
                }
                return request;
              },
              isVisible: false,
            },
            show: {},
            edit: {
              before: async (request) => {
                if (request.method === 'post') {
                  if (request.payload?.pwd) {
                    request.payload.pwd = request.payload.pwd;
                  } else {
                    delete request.payload?.pwd;
                  }
                }
                return request;
              },
              after: async (response) => {
                response.record.params.pwd = '';
                return response;
              },
            },
            list: {
                showFilter: false,
                after: async (response, request, ctx) => {
                    const { currentAdmin } = ctx;
                    response.records = response.records.filter((record) => {
                        record.params.pwd = '';
                        if (record.params.email === currentAdmin.email) {
                            return true;
                        };
                        return false;
                    });
                    response.meta.total = String(response.records?.length ?? 0);
                    return response;
                },
            },
            bulkDelete: {
                isVisible: false,
                isAccessible: false,
            },
            delete: {
                isAccessible: false,
                isVisible: false,
            },
          },
          properties: {
            pwd: {
              isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: true,
              },
            },
          },
    },
})