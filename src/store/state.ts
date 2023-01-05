const state = {
    _prevValueDateInput: '',
    get prevValueDateInput() {
        return this._prevValueDateInput
    },
    set prevValueDateInput(value) {
        this._prevValueDateInput = value
    }
}

export default state