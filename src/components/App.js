// здесь собирается приложение
import '../styles/main.css'
import createHeader from './header'

function createApp() {
    createHeader()
    const appContainerEl = document.createElement('div')
    appContainerEl.setAttribute('id', 'app-container')
    appContainerEl.innerText = 'aaa'
    return appContainerEl
}

export default createApp