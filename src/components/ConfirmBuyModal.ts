function createConfirmBuyModal() {
    const backgroundDiv = document.createElement('div')
    backgroundDiv.setAttribute('id', 'background-div')

    const modalWindow = document.createElement('div')
    modalWindow.setAttribute('id', 'modal-window')

    const personalDetails = document.createElement('div')
    personalDetails.setAttribute('id', 'personal-details-block')

    const personalDetailsTitle = document.createElement('h2')
    personalDetails.classList.add('modal-title')
    personalDetailsTitle.innerText = 'Personal details'

    const nameInput = document.createElement('input')
    nameInput.classList.add('personal-details-input')
    nameInput.setAttribute('placeholder', 'Name')

    const phoneNumberInput = document.createElement('input')
    phoneNumberInput.classList.add('personal-details-input')
    phoneNumberInput.setAttribute('placeholder', 'Phone number')

    const adressInput = document.createElement('input')
    adressInput.classList.add('personal-details-input')
    adressInput.setAttribute('placeholder', 'Delivery adress')

    const emailInput = document.createElement('input')
    emailInput.classList.add('personal-details-input')
    emailInput.setAttribute('placeholder', 'E-mail')

    personalDetails.append(personalDetailsTitle, nameInput, phoneNumberInput, adressInput, emailInput)

    const creditCardDetails = document.createElement('div')
    creditCardDetails.classList.add('details-block')

    const creditCardDetailsTitle = document.createElement('h2')
    creditCardDetailsTitle.classList.add('modal-title')
    creditCardDetailsTitle.innerText = 'Credit card details'

    const creditCard = document.createElement('div')
    creditCard.setAttribute('id', 'credit-card')

    const numberBlock = document.createElement('div')

    const numberInput = document.createElement('input')
    numberInput.setAttribute('placeholder', 'Card number')

    numberBlock.append(numberInput)

    const dateAndCvvBlock = document.createElement('div')

    const dateBlock = document.createElement('div')
    dateBlock.innerText = 'Valid: '

    const dateInput = document.createElement('input')
    dateInput.setAttribute('placeholder', 'Valid thru')

    dateBlock.append(dateInput)

    const cvvBlock = document.createElement('div')
    cvvBlock.innerText = 'CVV: '

    const cvvInput = document.createElement('input')
    cvvInput.setAttribute('placeholder', 'CVV')

    cvvBlock.append(cvvInput)

    dateAndCvvBlock.append(dateBlock, cvvBlock)

    creditCard.append(numberBlock, dateAndCvvBlock)

    creditCardDetails.append(creditCardDetailsTitle, creditCard)

    const confirmBtn = document.createElement('button')
    confirmBtn.setAttribute('id', 'confirm-btn')
    confirmBtn.innerText = 'Confirm'

    modalWindow.append(personalDetails, creditCardDetails, confirmBtn)

    backgroundDiv.append(modalWindow)
    return backgroundDiv
}

export default createConfirmBuyModal