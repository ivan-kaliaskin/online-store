import initialState from "../constants/initialState"
import onModalInputClick from "../services/onModalINputClick"
import state from "../store/state"

function ConfirmBuyModal() {
    state.inputStatus = initialState
    const backgroundDiv = document.createElement('div')
    backgroundDiv.setAttribute('id', 'background-div')
    backgroundDiv.classList.add('modal-overlay')
    backgroundDiv.addEventListener('click', (event) => {
        if ((event.target === backgroundDiv)) {
            backgroundDiv.style.display = 'none'
        }
    })

    const modalWindow = document.createElement('div')
    modalWindow.setAttribute('id', 'modal-window')
    modalWindow.classList.add('modal-window')
    modalWindow.addEventListener('input', (event) => {
        const el = event.target! as HTMLInputElement
        console.log(el)
        onModalInputClick(el)
        if (state.checkInputState()) {
            confirmBtn.disabled = false
        } else {
            confirmBtn.disabled = true
        }
    })

    const personalDetails = document.createElement('div')
    personalDetails.setAttribute('id', 'personal-details-block')
    personalDetails.classList.add('modal-inner')

    const personalDetailsTitle = document.createElement('h2')
    personalDetailsTitle.classList.add('modal-title')
    personalDetailsTitle.innerText = 'Personal details'

    const nameInput = document.createElement('input')
    nameInput.classList.add('modal-input')
    nameInput.setAttribute('placeholder', 'Name')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'input-name')

    const phoneNumberInput = document.createElement('input')
    phoneNumberInput.classList.add('modal-input')
    phoneNumberInput.setAttribute('placeholder', 'Phone number')
    phoneNumberInput.setAttribute('type', 'text')
    phoneNumberInput.setAttribute('id', 'input-phone')

    const adressInput = document.createElement('input')
    adressInput.classList.add('modal-input')
    adressInput.setAttribute('placeholder', 'Delivery adress')
    adressInput.setAttribute('type', 'text')
    adressInput.setAttribute('id', 'input-adress')

    const emailInput = document.createElement('input')
    emailInput.classList.add('modal-input')
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
    creditCard.classList.add('credit-card')

    const numberBlock = document.createElement('div')
    numberBlock.classList.add('credit-card-number')

    const numberInput = document.createElement('input')
    numberInput.classList.add('credit-card-input', 'credit-card-input--large')
    numberInput.setAttribute('placeholder', 'Card number')
    numberInput.setAttribute('type', 'text')
    numberInput.setAttribute('id', 'input-card')

    numberBlock.append(numberInput)

    const dateAndCvvBlock = document.createElement('div')
    dateAndCvvBlock.classList.add('credit-card-content')

    const dateBlock = document.createElement('div')
    dateBlock.classList.add('credit-card-content-block')
    dateBlock.innerText = 'Valid: '

    const dateInput = document.createElement('input')
    dateInput.classList.add('credit-card-input', 'credit-card-input--small')
    dateInput.setAttribute('placeholder', 'Valid thru')
    dateInput.setAttribute('type', 'text')
    dateInput.setAttribute('id', 'input-date')

    dateBlock.append(dateInput)

    const cvvBlock = document.createElement('div')
    cvvBlock.classList.add('credit-card-content-block')
    cvvBlock.innerText = 'CVV: '

    const cvvInput = document.createElement('input')
    cvvInput.classList.add('credit-card-input', 'credit-card-input--small')
    cvvInput.setAttribute('placeholder', 'CVV')
    cvvInput.setAttribute('type', 'text')
    cvvInput.setAttribute('id', 'input-cvv')

    cvvBlock.append(cvvInput)

    dateAndCvvBlock.append(dateBlock, cvvBlock)

    creditCard.append(numberBlock, dateAndCvvBlock)

    creditCardDetails.append(creditCardDetailsTitle, creditCard)

    const confirmBtn = document.createElement('button')
    confirmBtn.setAttribute('id', 'confirm-btn')
    confirmBtn.classList.add('confirm-btn')
    confirmBtn.innerText = 'Confirm'
    confirmBtn.setAttribute('disabled', 'true')

    modalWindow.append(personalDetails, creditCardDetails, confirmBtn)

    backgroundDiv.append(modalWindow)
    return backgroundDiv
}

export default ConfirmBuyModal