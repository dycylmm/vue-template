function generateCustomers(faker) {
  var customers = []

  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var phoneNumber = faker.phone.phoneNumber()

    customers.push({
      id: id,
      name: `${firstName}${lastName}`,
      phone: phoneNumber
    })
  }
  return {
    code: '10000',
    result: customers
  }
}

module.exports = generateCustomers
