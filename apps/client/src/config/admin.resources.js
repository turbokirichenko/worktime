import { Adapter } from '@adminjs/sql'
import { 
    actsResource,
    articleStatusesResource,
    articlesResource,
    attachmentsResource,
    companyResource,
    employeesResource,
    positionsResource,
    productsResource,
    vendorsResource,
    warehouseResource
} from "../resources/index.js"

/** created resources config
 * 
 * @param {Adapter} __adapter 
 */
export const adminResourceFactory = (__adapter) => {
    return [
        employeesResource(__adapter),
        actsResource(__adapter),
        articleStatusesResource(__adapter),
        articlesResource(__adapter),
        attachmentsResource(__adapter),
        companyResource(__adapter),
        positionsResource(__adapter),
        productsResource(__adapter),
        vendorsResource(__adapter),
        warehouseResource(__adapter)
    ]
}