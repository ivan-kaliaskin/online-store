// здесь собирается приложение
import '../styles/main.css'

function createApp() {
    const appContainerEl = document.createElement('div')
    appContainerEl.setAttribute('id', 'app-container')
    appContainerEl.innerText = 'aaa'
    return appContainerEl
}

export default createApp