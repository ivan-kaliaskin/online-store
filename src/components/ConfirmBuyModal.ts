import onModalInputClick from "../services/onModalINputClick"

function createConfirmBuyModal() {
    const backgroundDiv = document.createElement('div')
    backgroundDiv.setAttribute('id', 'background-div')

    const modalWindow = document.createElement('div')
    modalWindow.setAttribute('id', 'modal-window')
    modalWindow.addEventListener('input', (event) => {
        const el = event.target! as HTMLInputElement
        console.log(el)
        onModalInputClick(el)
    })

    const personalDetails = document.createElement('div')
    personalDetails.setAttribute('id', 'personal-details-block')

    const personalDetailsTitle = document.createElement('h2')
    personalDetails.classList.add('modal-title')
    personalDetailsTitle.innerText = 'Personal details'

    const nameInput = document.createElement('input')
    nameInput.classList.add('details-input')
    nameInput.setAttribute('placeholder', 'Name')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'input-name')

    const phoneNumberInput = document.createElement('input')
    phoneNumberInput.classList.add('details-input')
    phoneNumberInput.setAttribute('placeholder', 'Phone number')
    phoneNumberInput.setAttribute('type', 'text')
    phoneNumberInput.setAttribute('id', 'input-phone')

    const adressInput = document.createElement('input')
    adressInput.classList.add('details-input')
    adressInput.setAttribute('placeholder', 'Delivery adress')
    adressInput.setAttribute('type', 'text')
    adressInput.setAttribute('id', 'input-adress')

    const emailInput = document.createElement('input')
    emailInput.classList.add('details-input')
    emailInput.setAttribute('placeholder', 'E-mail')
    emailInput.setAttribute('type', 'text')
    emailInput.setAttribute('id', 'input-email')

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
    numberInput.classList.add('details-input')
    numberInput.setAttribute('placeholder', 'Card number')
    numberInput.setAttribute('type', 'text')
    numberInput.setAttribute('id', 'input-card')

    numberBlock.append(numberInput)

    const dateAndCvvBlock = document.createElement('div')

    const dateBlock = document.createElement('div')
    dateBlock.innerText = 'Valid: '

    const dateInput = document.createElement('input')
    dateInput.classList.add('details-input')
    dateInput.setAttribute('placeholder', 'Valid thru')
    dateInput.setAttribute('type', 'text')
    dateInput.setAttribute('id', 'input-date')

    dateBlock.append(dateInput)

    const cvvBlock = document.createElement('div')
    cvvBlock.innerText = 'CVV: '

    const cvvInput = document.createElement('input')
    cvvInput.classList.add('details-input')
    cvvInput.setAttribute('placeholder', 'CVV')
    cvvInput.setAttribute('type', 'text')
    cvvInput.setAttribute('id', 'input-cvv')

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