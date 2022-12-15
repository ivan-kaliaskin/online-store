// здесь собирается приложение
function createApp() {
    const appContainerEl = document.createElement('div')
    appContainerEl.setAttribute('id', 'app-container')
    appContainerEl.innerText = 'aaa'
    return appContainerEl
}

export default createApp