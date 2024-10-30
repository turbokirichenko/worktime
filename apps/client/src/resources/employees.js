import Adapter from "@adminjs/sql";
import { signHash, validateHash } from '../hash/hash.js'

/**
 * @param {Adapter} __adapter
 */
export const employeesResource = (__adapter) => ({
  resource: __adapter.table('employees'),
  options: {
    listProperties: ['name', 'email', 'phone'],
    filterProperties: [],
    editProperties: ['name', 'email', 'phone', 'password'],
    showProperties: ['name', 'email', 'phone'],
    actions: {
      new: {
        isAccessible: false,
        isVisible: false,
      },
      edit: {
        before: async (request) => {
          if (request.method === 'post') {
            if (request.payload?.password) {
              var h = signHash(request.payload.password)
			  var v = validateHash(request.payload.password, h)
			  if (v) {
				request.payload.password = h
			  }
            } else {
              delete request.payload?.password;
            }
          }
          return request;
        },
        after: async (response) => {
          response.record.params.password = '';
          return response;
        },
      },
      list: {
          showFilter: false,
          after: async (response, request, ctx) => {
              const { currentAdmin } = ctx;
              response.records = response.records.filter((record) => {
                  record.params.password = '';
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
      password: {
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