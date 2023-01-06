import IState from "../interfaces_and_types/IState"

const state: IState = {
    _prevValueDateInput: '',
    get prevValueDateInput() {
        return this._prevValueDateInput
    },
    set prevValueDateInput(value: string) {
        this._prevValueDateInput = value
    },
    _inputStatus: {
        nameInput: false,
        phoneNumberInput: false,
        adressInput: false,
        emailInput: false,
        numberInput: false,
        dateInput: false,
        cvvInput: false,
    },
    get inputStatus() {
        return this._inputStatus
    },
    set inputStatus(status) {
        this._inputStatus = status
    },
    checkInputState() {
        return this._inputStatus.nameInput &&
            this._inputStatus.phoneNumberInput &&
            this._inputStatus.adressInput &&
            this._inputStatus.emailInput &&
            this._inputStatus.numberInput &&
            this._inputStatus.dateInput &&
            this._inputStatus.cvvInput
    }
}

export default state