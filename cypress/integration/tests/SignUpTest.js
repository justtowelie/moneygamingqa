/// <reference types="Cypress" />
import SignUpPage from '../pageObjects/SignUpPage'
import userData from '../../support/data'
import params from '../../support/params'

describe('Sign up user journey', function()
{
    beforeEach(function(){
        cy.visit(Cypress.env('url')+ params.SIGN_UP)
    })

    it('Sign up e2e journey', function(){
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
        signUpPage.selectCountry(userData.country)
        signUpPage.setUsername(userData.randomUser)
        signUpPage.setPassword(userData.password)
        signUpPage.reconfirmPassword(userData.password)
        signUpPage.selectSecurityQuestion()
        signUpPage.setAnswerOne(userData.randomAnswer)
        signUpPage.selectSecurityQuestionTwo()
        signUpPage.setAnswerTwo(userData.randomAnswer)
        signUpPage.selectCurrency(userData.currency)
        signUpPage.verifyMarketingPreferences()
        signUpPage.selectTermsAndConditions()
        signUpPage.clickJoinNowButton()
        signUpPage.confirmDobIsRequired()
        signUpPage.selectDateOfBirth('10', 'June', '1995')
        signUpPage.clickJoinNowButton()
    })
})


