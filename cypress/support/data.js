const faker = require('faker');


let userData = {
    randomName: faker.name.findName(),
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPhoneNumber: faker.phone.phoneNumber('0207#######'),
    randomMobileNumber: faker.phone.phoneNumber('07715######'),
    randomStreetAddress: faker.address.streetAddress(),
    randomCity: faker.address.city(),
    randomCounty: faker.address.county(),
    randomZipCode: faker.address.zipCode(),
    randomAnswer: faker.random.word(),
    randomPassword: faker.random.number(),
    randomUser: faker.random.alphaNumeric(6),
    password: 'L0nd0n',
    country: 'UNITED KINGDOM',
    currency: 'Pounds Sterling'

}


export default userData