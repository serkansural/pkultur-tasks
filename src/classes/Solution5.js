import { Solution } from './Solution'

class Solution5 extends Solution {
  Solve () {
    const input = this.questionData.formObj
    const customerDB = this.questionData.customers_database
    const ordersDB = this.questionData.orders_database

    const customerOrders = ordersDB.filter(o => o.customerId === input.id)
    const customerData = customerDB.filter(c => c.customerId === input.id)

    const isOrderDup = customerOrders.some(o => o.locality === input.locality)
    const isCustomerDup = customerData.some(c => c.lastName === input.lastName || c.email === input.email || c.tnumber === input.tnumber || c.mnumber === input.mnumber)
    return isOrderDup && isCustomerDup
  }
}

export { Solution5 }
