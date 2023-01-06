interface IState {
    _prevValueDateInput: string,
    prevValueDateInput: string,
    _inputStatus: {
        nameInput: boolean,
        phoneNumberInput: boolean,
        adressInput: boolean,
        emailInput: boolean,
        numberInput: boolean,
        dateInput: boolean,
        cvvInput: boolean,
    },
    inputStatus: {
        nameInput: boolean,
        phoneNumberInput: boolean,
        adressInput: boolean,
        emailInput: boolean,
        numberInput: boolean,
        dateInput: boolean,
        cvvInput: boolean,
    },
    checkInputState(): boolean
}

export default IState