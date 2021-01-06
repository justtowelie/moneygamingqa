class SignUpPage
{

    setTitle(){
         cy.get('select').eq(0).select('Mr').should('have.value', 'Mr')
    }


    setFirstName(value){
        cy.get('input[id=forename]').type(value)
    }

    setSurname(value){
        cy.get('input').eq(4).type(value)
    }

    selectDateOfBirth(day, month, year){
        cy.get('select[id=dobDay]').select(day)
        cy.get('select[id=dobMonth]').select(month)
        cy.get('select[id=dobYear]').select(year)
    } 

    setEmail(value){
        cy.get('[name="map(email)"]').type(value)
    }

    setTelephoneNumber(value){
        cy.get('[name="map(phone)"]').type(value)
    }

    setMobileNumber(value){
        cy.get('[name="map(mobile)"]').type(value)
    }

    setAddress(value){
        cy.get('[name="map(address1)"]').type(value)
    }

    setCity(value){
        cy.get('[name="map(addressCity)"]').type(value)
    }

    setCounty(value){
        cy.get('[name="map(stateProv)"]').type(value)
    }

    setPostCode(value){
        cy.get('[name="map(postCode)"]').type(value)
    }

    selectCountry(value){
        cy.get('select[id=countryList]').select(value)
    }

    
    setUsername(value){
        cy.get('[name="map(userName)"]').type(value)
    }

    
    setPassword(value){
        cy.get('#password').type(value)
    }

    
    reconfirmPassword(value){
        cy.get('[name="map(passwordConfirm)"]').type(value)
    }

    selectSecurityQuestion(){
        cy.get('select[id=securityQuestionOne]').select('What was your childhood nickname?').should('have.value', 'What was your childhood nickname?')
    }

    selectSecurityQuestionTwo(){
        cy.get('select[id=securityQuestionTwo]').select('What is your favourite colour?').should('have.value', 'What is your favourite colour?')
    }

    setAnswerOne(value){
        cy.get('[name="map(securityAnswerOne)"]').type(value)
    }

    setAnswerTwo(value){
        cy.get('[name="map(securityAnswerTwo)"]').type(value)
    }


    selectCurrency(currency){
        cy.get('[name="map(currency)"]').select(currency)
    }

    setBonusCodeAndVerify(value) {
        cy.get(':nth-child(5) > .silver').click()        
    }

    verifyMarketingPreferences() {
        cy.get('[name="map(marketingSms)"]').check().should('be.checked')
        cy.get('[name="map(marketingPhone)"]').check().should('be.checked')
    }

    selectTermsAndConditions() {
        cy.get('[id="termsCheckbox"]').should('have.text' , 'I accept the Terms and Conditions and certify that I am over the age of 18.')
        cy.get('[name="map(terms)"]').check().should('be.checked')
    }

    clickJoinNowButton() {
        cy.get('#form').click()
    }

    confirmDobIsRequired() {
        cy.get('[for=dob]').should('have.text' , 'This field is required')
    }

}

export default SignUpPage