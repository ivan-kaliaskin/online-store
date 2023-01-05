import state from "../store/state"

function onModalInputClick(el: HTMLInputElement) {
    let validRegex = /./
    switch (el.id) {
        case 'input-name':
            validRegex = /^[a-zA-Zа-яА-Я]{3,15}( [a-zA-Zа-яА-Я]{3,15}){1,3}$/
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, nameInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, nameInput: false }
            }
            break;
        case 'input-phone':
            validRegex = /^[+][0-9]{9,15}$/
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, phoneNumberInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, phoneNumberInput: false }
            }
            break;
        case 'input-adress':
            validRegex = /^[a-zA-z0-9-]{5,20}( [a-zA-z0-9-]{5,20}){2,10}$/
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, adressInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, adressInput: false }
            }
            break;
        case 'input-email':
            validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, emailInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, emailInput: false }
            }
            break;
        case 'input-card':
            validRegex = /^[0-9]{16}$/
            el.classList.add('invalid')
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, numberInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, numberInput: false }
            }
            break;
        case 'input-date':
            validRegex = /^[0-9]{2}\/[0-9]{2}$/
            el.classList.add('invalid')
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, dateInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, dateInput: false }
            }
            if (el.value.length === 2 && state.prevValueDateInput.length === 1) {
                el.value += '/'
            } else {
                console.log('не ставится /')
            }
            state.prevValueDateInput = el.value
            console.log(state.prevValueDateInput)
            break;
        case 'input-cvv':
            validRegex = /^[0-9]{3}$/
            if (el.value.match(validRegex)) {
                el.classList.add('valid')
                el.classList.remove('invalid')
                state.inputStatus = { ...state._inputStatus, cvvInput: true }
            } else {
                el.classList.add('invalid')
                el.classList.remove('valid')
                state.inputStatus = { ...state._inputStatus, cvvInput: false }
            }
            break;

        default:
            console.log(el.id, el.value)
            break;
    }
}

export default onModalInputClick