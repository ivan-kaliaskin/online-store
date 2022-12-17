// здесь собирается приложение
import '../styles/main.css'
import Header from './header'
import PageContainer from './PageContainer'
import Footer from './footer'

function createApp() {
    const appContainerEl = document.createElement('div')
    appContainerEl.setAttribute('id', 'app-container')
    appContainerEl.append(Header(), PageContainer(), Footer())
    return appContainerEl
}

export default createApp