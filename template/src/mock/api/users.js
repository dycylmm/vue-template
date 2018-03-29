function generateUsers(faker) {
  var users = []

  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var avatar = faker.image.avatar()
    var phoneNumber = faker.phone.phoneNumberFormat()

    users.push({
      id: id,
      avatar: avatar,
      name: `${firstName}${lastName}`,
      phone: phoneNumber
    })
  }
  return {
    code: '10000',
    result: users
  }
}

module.exports = generateUsers
