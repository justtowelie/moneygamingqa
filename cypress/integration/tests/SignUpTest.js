/// <reference types="Cypress" />
import { random } from 'faker';
import HomePage from '../pageObjects/HomePage'
import SignUpPage from '../pageObjects/SignUpPage'
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
    randomUser: faker.random.alphaNumeric(6)
}

describe('Sign up user journey', function()
{
    beforeEach(function(){
        cy.visit(Cypress.env('url')+"sign-up.shtml")
    })

    it('Sign up e2e journey', function(){
        const homePage = new HomePage()
        const signUpPage = new SignUpPage
        signUpPage.setTitle()
        signUpPage.setFirstName(userData.randomFirstName)
        signUpPage.setSurname(userData.randomLastName)
        signUpPage.setEmail(userData.randomEmail)
        signUpPage.setTelephoneNumber(userData.randomPhoneNumber)
        signUpPage.setMobileNumber(userData.randomMobileNumber)
        signUpPage.setAddress(userData.randomStreetAddress)
        signUpPage.setCity(userData.randomCity)
        signUpPage.setCounty(userData.randomCounty)
        signUpPage.setPostCode(userData.randomZipCode)
        signUpPage.selectCountry('UNITED KINGDOM')
        signUpPage.setUsername(userData.randomUser)
        signUpPage.setPassword('L0nd0n')
        signUpPage.reconfirmPassword('L0nd0n')
        signUpPage.selectSecurityQuestion()
        signUpPage.setAnswerOne(userData.randomAnswer)
        signUpPage.selectSecurityQuestionTwo()
        signUpPage.setAnswerTwo(userData.randomAnswer)
        signUpPage.selectCurrency('Pounds Sterling')
        signUpPage.verifyMarketingPreferences()
        signUpPage.selectTermsAndConditions()
        signUpPage.clickJoinNowButton()
        signUpPage.confirmDobIsRequired()
        signUpPage.selectDateOfBirth('10', 'June', '1995')
        signUpPage.clickJoinNowButton()
    })
})


