class SignUpPage

{ 
    constructor() {

        // ABOUT YOU SECTION
        this.FIRST_NAME = 'input[id=forename]';
        this.DOB_DAY = 'select[id=dobDay]';
        this.DOB_MONTH = 'select[id=dobMonth]';
        this.DOB_YEAR ='select[id=dobYear]';
        this.CONFIRM_DOB = '[for=dob]';
        this.EMAIL = '[name="map(email)"]';
        this.TELEPHONE = '[name="map(phone)"]';
        this.MOBILE = '[name="map(mobile)"]';

        // ADDRESS DETAILS 
        this.ADDRESS_LINE1 = '[name="map(address1)"]';
        this.CITY = '[name="map(addressCity)"]';
        this.COUNTY = '[name="map(stateProv)"]';
        this.POST_CODE = '[name="map(postCode)"]';
        this.COUNTRY = 'select[id=countryList]';

        // ACCOUNT AND SECURITY
        this.USERNAME = '[name="map(userName)"]';
        this.PASSWORD = '#password';
        this.RECONFIRM_PASSWORD = '[name="map(passwordConfirm)"]';
        this.SECURITY_QUESTION_ONE = 'select[id=securityQuestionOne]';
        this.SECURITY_QUESTION_TWO = 'select[id=securityQuestionTwo]';
        this.ANSWER_ONE = '[name="map(securityAnswerOne)"]';
        this.ANSWER_TWO = '[name="map(securityAnswerTwo)"]';


        // FOOTER
        this.CURRENCY = '[name="map(currency)"]';
        this.BONUS_CODE = ':nth-child(5) > .silver';
        this.SMS_MARKETING_PREFERENCE = '[name="map(marketingSms)"]';
        this.PHONE_MARKETING_PREFERENCE = '[name="map(marketingPhone)"]';
        this.TERMS_CHECKBOX = '[id="termsCheckbox"]';
        this.TERMS_VERIFICATION = '[name="map(terms)"]';
        this.JOIN_NOW_BUTTON = '#form';
}

    setTitle(){
         cy.get('select').eq(0).select('Mr').should('have.value', 'Mr')
    }


    setFirstName(value){
        cy.get(this.FIRST_NAME).type(value)
    }

    setSurname(value){
        cy.get('input').eq(4).type(value)
    }

    selectDateOfBirth(day, month, year){
        cy.get(this.DOB_DAY).select(day)
        cy.get(this.DOB_MONTH).select(month)
        cy.get(this.DOB_YEAR).select(year)
    } 

    setEmail(value){
        cy.get(this.EMAIL).type(value)
    }

    setTelephoneNumber(value){
        cy.get(this.TELEPHONE).type(value)
    }

    setMobileNumber(value){
        cy.get(this.MOBILE).type(value)
    }

    setAddress(value){
        cy.get(this.ADDRESS_LINE1).type(value)
    }

    setCity(value){
        cy.get(this.CITY).type(value)
    }

    setCounty(value){
        cy.get(this.COUNTY).type(value)
    }

    setPostCode(value){
        cy.get(this.POST_CODE).type(value)
    }

    selectCountry(value){
        cy.get(this.COUNTRY).select(value)
    }

    
    setUsername(value){
        cy.get(this.USERNAME).type(value)
    }

    
    setPassword(value){
        cy.get(this.PASSWORD).type(value)
    }

    
    reconfirmPassword(value){
        cy.get(this.RECONFIRM_PASSWORD).type(value)
    }

    selectSecurityQuestion(){
        cy.get(this.SECURITY_QUESTION_ONE).select('What was your childhood nickname?').should('have.value', 'What was your childhood nickname?')
    }

    selectSecurityQuestionTwo(){
        cy.get(this.SECURITY_QUESTION_TWO).select('What is your favourite colour?').should('have.value', 'What is your favourite colour?')
    }

    setAnswerOne(value){
        cy.get(this.ANSWER_ONE).type(value)
    }

    setAnswerTwo(value){
        cy.get(this.ANSWER_TWO).type(value)
    }


    selectCurrency(currency){
        cy.get(this.CURRENCY).select(currency)
    }

    setBonusCodeAndVerify(value) {
        cy.get(this.BONUS_CODE).click()        
    }

    verifyMarketingPreferences() {
        cy.get(this.SMS_MARKETING_PREFERENCE).check().should('be.checked')
        cy.get(this.PHONE_MARKETING_PREFERENCE).check().should('be.checked')
    }

    selectTermsAndConditions() {
        cy.get(this.TERMS_CHECKBOX).should('have.text' , 'I accept the Terms and Conditions and certify that I am over the age of 18.')
        cy.get(this.TERMS_VERIFICATION).check().should('be.checked')
    }

    clickJoinNowButton() {
        cy.get(this.JOIN_NOW_BUTTON).click()
    }

    confirmDobIsRequired() {
        cy.get(this.CONFIRM_DOB).should('have.text' , 'This field is required')
    }

}

export default SignUpPage