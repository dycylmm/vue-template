var generateUsers = require('./api/users')
var generateCustomers = require('./api/customers')
var faker = require('faker')
faker.locale = 'zh_CN'

function generateMock() {
  return {
    users: generateUsers(faker),
    customers: generateCustomers(faker)
  }
}
module.exports = generateMock
