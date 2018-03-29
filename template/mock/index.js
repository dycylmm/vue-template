var generateCustomers = require('./api/customers')
var faker = require('faker')
faker.locale = 'zh_CN'

function generateMock() {
  return {
    customers: generateCustomers(faker)
  }
}
module.exports = generateMock
