// здесь собирается приложение
import '../styles/main.css'
import Header from './header'
import PageContainer from './PageContainer'

function createApp() {
    const appContainerEl = document.createElement('div')
    appContainerEl.setAttribute('id', 'app-container')
    appContainerEl.append(Header(), PageContainer())
    return appContainerEl
}

export default createApp